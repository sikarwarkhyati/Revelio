import { Routes, Route } from "react-router-dom";
import MainLayout from "./mainLayout";
import AuthLayout from "./authLayout";
import Home from "./Home";
import Account from "./account";
import Events from "./Events";
import Community from "./Community";
import Blog from "./Bts";
import Login from "./login";
import Signup from "./signup";
import "bootstrap-icons/font/bootstrap-icons.css";
import EmailVerified from "./EmailVerified";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/email-verified" element={<EmailVerified />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
