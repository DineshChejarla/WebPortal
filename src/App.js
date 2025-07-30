import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { GiftProvider } from "./hooks/ExampleContext";
import ErrorBoundary from "./errorBounday/ErrorBoundary";
import "./App.css";

// Lazy imports
const Home = lazy(() => import("./home/Home"));
const User = lazy(() => import("./user/User"));
const Post = lazy(() => import("./post/Post"));
const MyParent = lazy(() => import("./hooks/MyParent"));
const Dom = lazy(() => import("./hooks/Dom"));
const MemoValue = lazy(() => import("./hooks/MemoValue"));
const Multistate = lazy(() => import("./hooks/MultiState"));
const Count = lazy(() => import("./hooks/Count"));
const Counter = lazy(() => import("./hooks/Counter"));
const City = lazy(() => import("./hooks/City"));
const Form = lazy(() => import("./hooks/Form"));
const Banglore = lazy(() => import("./hooks/Banglore"));
const Delhi = lazy(() => import("./hooks/Delhi"));
const Hyderabad = lazy(() => import("./hooks/Hyderabad"));
const Kolkata = lazy(() => import("./hooks/Kolkata"));
const Mumbai = lazy(() => import("./hooks/Mumbai"));
const Album = lazy(() => import("./album/Album"));
const ImageView = lazy(() => import("./album/ImageView"));

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/post";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="myparent" element={<MyParent />} />
          <Route path="dom" element={<Dom />} />
          <Route path="memovalue" element={<MemoValue />} />
          <Route path="/multistate" element={<Multistate />} />
          <Route path="/count" element={<Count />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/city" element={<City />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/gift"
            element={
              <div>
                <h4>sending gift to banglore</h4>
                <GiftProvider>
                  <Delhi />
                </GiftProvider>
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
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
