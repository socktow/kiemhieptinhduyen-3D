import "./index.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import MainLayout from "./Layouts/MainLayout/Index";
import EventLayout from "./Layouts/EventLayout/Index";
import Login from "./Pages/LoginSignup";
import PageCateGory from "./Pages/PageCateGory";
import PageContent from "./Pages/PageContent";
import ImgContentPage from "./Assets/img-bg-news-top.jpg";

function App() {
  const [isEventActive] = useState(false); // Trạng thái xác định EventLayout

  return (
    <BrowserRouter>
      <Routes>
        {/* Điều hướng trang chính */}
        <Route
          path="/"
          element={
            isEventActive ? <EventLayout /> : <Navigate to="/home" replace />
          }
        />

        {/* MainLayout */}
        <Route path="/home" element={<MainLayout />}>
          {/* Trang landing */}
          <Route index element={<Landing />} />

          {/* Trang login */}
          <Route path="login" element={<Login />} />

          {/* Trang danh mục bài viết */}
          <Route path="news/:category" element={<PageCateGory />} />
          <Route
            path="news/menclother"
            element={
              <PageCateGory banner={ImgContentPage} category="menclother" />
            }
          />
          <Route
            path="news/womenclother"
            element={
              <PageCateGory banner={ImgContentPage} category="womenclother" />
            }
          />

          {/* Trang nội dung bài viết */}
          <Route path="news/:category/:title" element={<PageContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
