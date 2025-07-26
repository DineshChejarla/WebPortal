import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./App.css";
// import Weather from "./weather/Weather";
import User from "./user/User";
import Post from "./post/Post";
import { PostPage } from "./post/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/weather" element={<Weather />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/post-page" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
