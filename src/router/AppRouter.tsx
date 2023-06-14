import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import SearchPage from "../pages/SearchPage";
import SettingPage from "../pages/SettingPage";
import WritePage from "../pages/WritePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
      <Route path="/edit" element={<WritePage />} />
    </Routes>
  );
};

export default AppRouter;
