import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticateTemplate from "./templates/AuthenticateTemplate";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Loading from "./components/Loading/Loading";
import ButtonToTop from "./components/ButtonToTop/ButtonToTop";
import RegisterPage from "../src/pages/RegisterPage/RegisterPage";
import CheckUser from "./HOC/CheckUser";

import AdminTemplate from "./templates/AdminTemplate";
import AddMovie from "./pages/AdminPage/Films/AddMovie";
import Films from "./pages/AdminPage/Films/Films";

import ScreenPage from "./pages/ScreenPage/ScreenPage";
import Page404 from "./pages/Page404/Page404";
import HistoryBooking from "./pages/HistoryBooking/HistoryBooking";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import UserTemplate from "./templates/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Loading />

      <Routes>
        {/* home  */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
          <Route
            path="screen/:maLichChieu"
            element={
              <CheckUser>
                <ScreenPage />
              </CheckUser>
            }
          />

          {/* Page 404 */}
          <Route path="*" element={<Page404 />}></Route>
        </Route>
        {/* auth  */}
        <Route path="auth" element={<AuthenticateTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />}></Route>
        </Route>

        {/* admin  */}
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="movie-manager" element={<Films />} />
          <Route path="add-movie" element={<AddMovie />} />
        </Route>

        {/* User */}
        <Route path="user" element={<UserTemplate />}>
          <Route path="history" element={<HistoryBooking />} />
          <Route path="info" element={<UserInfoPage />} />
        </Route>
      </Routes>

      <ButtonToTop />
    </BrowserRouter>
  );
}

export default App;
