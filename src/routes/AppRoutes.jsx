import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBounday/ErrorBoundary";

// Lazy imports
const Home = lazy(() => import("../home/Home"));
const User = lazy(() => import("../user/User"));
const Post = lazy(() => import("../post/Post"));
const EmployeeInfo = lazy(() => import("../employee/EmployeeInfo"));
const MemoValue = lazy(() => import("../MemoValue"));
const Multistate = lazy(() => import("../user/MultiUser"));
const Counter = lazy(() => import("../counter/Counter"));
const TotalCounter = lazy(() => import("../counter/TotalCounter"));
const City = lazy(() => import("../transport/City"));
const Form = lazy(() => import("../Form"));
const Banglore = lazy(() => import("../transport/Banglore"));
const Delhi = lazy(() => import("../transport/Delhi"));
const Hyderabad = lazy(() => import("../transport/Hyderabad"));
const Kolkata = lazy(() => import("../transport/Kolkata"));
const Mumbai = lazy(() => import("../transport/Mumbai"));
const Album = lazy(() => import("../album/Album"));
const ImageView = lazy(() => import("../album/ImageView"));

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/post";

  return (    <>
      {!hideHeaderFooter && <Header />}

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user"
            element={
              <ErrorBoundary>
                <User />
              </ErrorBoundary>
            }
          />
          <Route path="/user/:id" element={<User />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/EmployeeInfo" element={<EmployeeInfo />} />
          <Route path="/memovalue" element={<MemoValue />} />
          <Route path="/multistate" element={<Multistate />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/totalcounter" element={<TotalCounter />} />
          <Route path="/city" element={<City />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/gift"
            element={
              <div>
                <h4>sending gift to banglore</h4>
                <Delhi gift="🎁" />
              </div>
            }
          />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/banglore" element={<Banglore />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/hyderabad" element={<Hyderabad />} />
          <Route path="/kolkata" element={<Kolkata />} />
          <Route path="/album" element={<Album />} />
          <Route path="/album/:id" element={<ImageView />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default AppContent;
