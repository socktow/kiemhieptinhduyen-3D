import "./index.css";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainLayout from "./Layouts/MainLayout/Index";
import EventLayout from "./Layouts/EventLayout/Index";
import Login from "./Pages/LoginSignup";
import PageCateGory from "./Pages/PageCateGory";
import PageContent from "./Pages/PageContent";
import ImgContentPage from "./Assets/img-bg-news-top.jpg";
import User from "./Components/User/User";
// Redux
import store from "./Redux/store";
import { fetchUserInfo } from "./Redux/UserSlice";

function App() {
  const [isEventActive] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserInfo());
    } else {
      console.log("No token found. Redirecting to login...");
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {isEventActive ? (
            <Route path="/" element={<EventLayout />} />
          ) : (
            <Route path="/" element={<Navigate to="/home" replace />} />
          )}
          <Route path="/home" element={<MainLayout />}>
            <Route index element={<Landing />} />
            <Route path="/home/login" element={<Login />} />
            <Route path="/home/user" element={<User />} />
            <Route path="/home/news/:category" element={<PageCateGory />} />
            <Route
              path="/home/news/tin-tuc"
              element={<PageCateGory banner={ImgContentPage} category="tin-tuc" />}
            />
            <Route
              path="/home/news/su-kien"
              element={<PageCateGory banner={ImgContentPage} category="su-kien" />}
            />
            <Route
              path="/home/news/tinh-nang"
              element={<PageCateGory banner={ImgContentPage} category="tinh-nang" />}
            />
            <Route
              path="/home/news/huong-dan"
              element={<PageCateGory banner={ImgContentPage} category="huong-dan" />}
            />
            <Route path="/home/news/:category/:title" element={<PageContent />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
