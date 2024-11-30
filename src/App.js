import "./index.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainLayout from "./Layouts/MainLayout/Index";
import EventLayout from "./Layouts/EventLayout/Index";
import Login from "./Pages/LoginSignup";
import PageCateGory from "./Pages/PageCateGory";
import PageContent from "./Pages/PageContent";
import ImgContentPage from "./Assets/img-bg-news-top.jpg"
function App() {
  const [isEventActive] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isEventActive ? (
          <Route path="/" element={<EventLayout />} />
        ) : (
          <Route path="/" element={<Navigate to="/home" replace />} />
        )}
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/news/:category" element={<PageCateGory />} />
          <Route
            path="/home/news/tin-tuc"
            element={
              <PageCateGory banner={ImgContentPage} category="tin-tuc" />
            }
          />
          <Route
            path="/home/news/su-kien"
            element={
              <PageCateGory banner={ImgContentPage} category="su-kien" />
            }
          />
          <Route
            path="/home/news/tinh-nang"
            element={
              <PageCateGory banner={ImgContentPage} category="tinh-nang" />
            }
          />
          <Route
            path="/home/news/huong-dan"
            element={
              <PageCateGory banner={ImgContentPage} category="huong-dan" />
            }
          />

          <Route path="/home/news/:category/:title" element={<PageContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;