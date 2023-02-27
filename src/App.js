import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/pages/Register/Register"
import Onbording from "./pages/Onboarding/Onboarding"
import SelectCategory from "./pages/SelectCategory/SelectCategory"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<Register />} />
        <Route path="/onboarding" element={<Onbording />} />
        <Route path="/SelectCategory" element={<SelectCategory />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
    // <>
    //   <Register />
    //   <Onbording />
    //   <SelectCategory />
    // </>
  );
}

export default App;
