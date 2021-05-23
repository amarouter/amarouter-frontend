import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = ({ location, history }) => {
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Profil</h3>
      <p>Profil Bilgileri</p>
      <br />
      <br />
      <br />
      <h3>Favori Eğitimler</h3>
      <p>JavaScript</p>
    </div>
  );
};

export default Dashboard;
