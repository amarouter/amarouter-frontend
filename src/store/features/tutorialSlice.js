import { collection, getDocs, query, where } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { db } from "../../firebase/firebaseConfig";

export const listTutorials = createAsyncThunk(
  "tutorialList/fetchTutorials",
  async (slug) => {
    const tutorialsCollection = collection(db, "tutorials");
    const q = query(tutorialsCollection, where("slug", "==", slug));
    const snapshot = await getDocs(q);

    let data = [];
    if (snapshot && !snapshot.empty) {
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), _id: doc.id });
      });
    }

    return data[0];
  }
);

export const listTutorialPage = createAsyncThunk(
  "tutorialPage/fetchTutorialPage",
  async (params) => {
    const tutorialsCollection = collection(db, "tutorials");
    const q = query(tutorialsCollection, where("slug", "==", params.slug));
    const snapshot = await getDocs(q);

    let data = [];
    if (snapshot && !snapshot.empty) {
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), _id: doc.id });
      });
    }

    const tutorialData = data[0];
    if (
      tutorialData &&
      Object.prototype.hasOwnProperty.call(tutorialData, "sections")
    ) {
      const section = tutorialData.sections.find(
        (element) => element.slug === params.sectionSlug
      );
      const page = section.pages.find(
        (element) => element.slug === params.pageSlug
      );

      const response = await fetch(page.url);
      const textData = await response.text();
      page["text"] = textData;

      return page;
    }
  }
);

// Tutorial List Slice
const tutorialListSlice = createSlice({
  name: "tutorialList",
  initialState: {
    tutorials: {},
    loading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTutorials.pending, (state) => {
        state.loading = true;
        state.tutorials = {};
      })
      .addCase(listTutorials.fulfilled, (state, action) => {
        state.loading = false;
        state.tutorials = action.payload;
      })
      .addCase(listTutorials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Tutorial Page Slice
const tutorialPageSlice = createSlice({
  name: "tutorialPage",
  initialState: {
    tutorialPage: {},
    loading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTutorialPage.pending, (state) => {
        state.loading = true;
        state.tutorialPage = {};
      })
      .addCase(listTutorialPage.fulfilled, (state, action) => {
        state.loading = false;
        state.tutorialPage = action.payload;
      })
      .addCase(listTutorialPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const tutorialListReducers = tutorialListSlice.reducer;
export const tutorialPageReducers = tutorialPageSlice.reducer;
