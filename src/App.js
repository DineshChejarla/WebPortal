import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { GiftProvider } from "./transport/GiftContext"; 

function App() {
  return (
    <BrowserRouter>
      <GiftProvider>
      <AppRoutes />
      </GiftProvider>
    </BrowserRouter>
  );
}

export default App;
