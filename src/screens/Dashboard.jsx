import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/particles/Header";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);
  return (
    <div className="component-blog">
      <Header />
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
