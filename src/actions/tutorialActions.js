import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";
import {
  tutorialListRequest,
  tutorialListSuccess,
  tutorialListFail,
  tutorialPageRequest,
  tutorialPageSuccess,
  tutorialPageFail,
} from "../reducers/tutorialReducers";

export const listTutorials = createAsyncThunk(
  "tutorialList/fetchTutorials",
  async (slug, { dispatch }) => {
    try {
      dispatch(tutorialListRequest());

      const docRef = db.collection("tutorials");
      const snapshot = await docRef.where("slug", "==", slug).get();

      let data = [];
      if (snapshot && !snapshot.empty) {
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), _id: doc.id });
        });
      }

      dispatch(tutorialListSuccess(data[0]));
    } catch (error) {
      dispatch(tutorialListFail(error.message));
    }
  }
);

export const listTutorialPage = createAsyncThunk(
  "tutorialPage/fetchTutorialPage",
  async (params, { dispatch }) => {
    try {
      dispatch(tutorialPageRequest());

      const docRef = db.collection("tutorials");
      const snapshot = await docRef.where("slug", "==", params.slug).get();

      let data = [];
      if (snapshot && !snapshot.empty) {
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), _id: doc.id });
        });
      }

      const tutorialData = data[0];
      if (tutorialData && tutorialData.hasOwnProperty("sections")) {
        const section = tutorialData.sections.find(
          (element) => element.slug === params.sectionSlug
        );
        const page = section.pages.find(
          (element) => element.slug === params.pageSlug
        );

        const response = await fetch(page.url);
        const textData = await response.text();
        page["text"] = textData;

        dispatch(tutorialPageSuccess(page));
      }
    } catch (error) {
      dispatch(tutorialPageFail(error.message));
    }
  }
);
