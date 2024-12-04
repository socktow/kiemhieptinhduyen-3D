import "./index.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Các thành phần
import Landing from "./Pages/Landing";
import MainLayout from "./Layouts/MainLayout/Index";
import EventLayout from "./Layouts/EventLayout/Index";
import Login from "./Pages/LoginSignup";
import PageCateGory from "./Pages/PageCateGory";
import PageContent from "./Pages/PageContent";
import ImgContentPage from "./Assets/img-bg-news-top.jpg";
import User from "./Components/User/User";
import Naptien from "./Components/NapTien/Naptien";
import AdminLayout from "./Layouts/AdminLayout/Index";
import DashBoard from "./Layouts/AdminLayout/DashBoard/Index";

// Redux
import { fetchUserInfo } from "./Redux/UserSlice";

function App() {
  const [isEventActive] = React.useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !userInfo) {
      dispatch(fetchUserInfo());
    }
  }, [dispatch, userInfo]);

  return (
    <Router>
      <Routes>
        {/* Sự kiện */}
        {isEventActive ? (
          <Route path="/" element={<EventLayout />} />
        ) : (
          <Route path="/" element={<Navigate to="/home" replace />} />
        )}

        {/* Giao diện chính */}
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="nap-tien" element={<Naptien />} />
          <Route path="news/:category" element={<PageCateGory />} />
          <Route
            path="news/tin-tuc"
            element={<PageCateGory banner={ImgContentPage} category="tin-tuc" />}
          />
          <Route
            path="news/su-kien"
            element={<PageCateGory banner={ImgContentPage} category="su-kien" />}
          />
          <Route
            path="news/tinh-nang"
            element={<PageCateGory banner={ImgContentPage} category="tinh-nang" />}
          />
          <Route
            path="news/huong-dan"
            element={<PageCateGory banner={ImgContentPage} category="huong-dan" />}
          />
          <Route path="news/:category/:title" element={<PageContent />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
