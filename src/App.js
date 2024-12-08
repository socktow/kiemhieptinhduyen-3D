import "./index.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Các thành phần
import Landing from "./Pages/Landing";
import MainLayout from "./Layouts/MainLayout/Index";
import EventLayout from "./Layouts/EventLayout/Index";
import Login from "./Pages/LoginSignup";
import PageCateGory from "./Pages/PageCateGory";
import ImgContentPage from "./Assets/img-bg-news-top.jpg";
import User from "./Components/User/User";
import Naptien from "./Components/NapTien/Naptien";
import AdminLayout from "./Layouts/AdminLayout/Index";

// Admin
import PostCreate from "./Layouts/AdminLayout/BaiViet/PostCreate";
import PostList from "./Layouts/AdminLayout/BaiViet/PostList";
import Upload from "./Layouts/AdminLayout/BaiViet/Upload";
import AddAccount from "./Layouts/AdminLayout/Account/AddAccount";
import AccountCRUD from "./Layouts/AdminLayout/Account/AccountCRUD";
import AddCoin from "./Layouts/AdminLayout/Account/AddCoin";
import GiftCodeCreate from "./Layouts/AdminLayout/GiftCode/GiftCodeCreate";
import GiftCodeHistory from "./Layouts/AdminLayout/GiftCode/GiftCodeHistory";
import GiftCodeList from "./Layouts/AdminLayout/GiftCode/GiftCodeList";
import TaoMocNap from "./Layouts/AdminLayout/MocNap/TaoMocNap";
import HistoryMocNap from "./Layouts/AdminLayout/MocNap/HistoryMocNap";
import LichSuNapThe from "./Layouts/AdminLayout/NapThe/LichSuNapThe";
import RateNapThe from "./Layouts/AdminLayout/NapThe/RateNapThe";
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
            element={
              <PageCateGory banner={ImgContentPage} category="tin-tuc" />
            }
          />
          <Route
            path="news/su-kien"
            element={
              <PageCateGory banner={ImgContentPage} category="su-kien" />
            }
          />
          <Route
            path="news/tinh-nang"
            element={
              <PageCateGory banner={ImgContentPage} category="tinh-nang" />
            }
          />
          <Route
            path="news/huong-dan"
            element={
              <PageCateGory banner={ImgContentPage} category="huong-dan" />
            }
          />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Bài Viết */}
          <Route path="posts/create" element={<PostCreate />} />
          <Route path="posts/list" element={<PostList />} />
          <Route path="posts/upload" element={<Upload />} />
          {/* Quản Lý Tài KHoản  */}
          <Route path="users/create" element={<AddAccount />} />
          <Route path="users/edit" element={<AccountCRUD />} />
          <Route path="users/add-credits" element={<AddCoin />} />
          {/* Quản Lý Giftcode */}
          <Route path="giftcode/create" element={<GiftCodeCreate />} />
          <Route path="giftcode/list" element={<GiftCodeList />} />
          <Route path="giftcode/history" element={<GiftCodeHistory />} />
          {/* Quản Lý Mốc Nạp */}
          <Route path="recharge-goals/create" element={<TaoMocNap />} />
          <Route path="recharge-goals/history" element={<HistoryMocNap />} />
          {/* Quản Lý Nạp Thẻ */}
          <Route path="recharges/history" element={<LichSuNapThe />} />
          <Route path="recharges/rate" element={<RateNapThe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
