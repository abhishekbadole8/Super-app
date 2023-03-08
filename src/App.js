import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../src/pages/Register/Register"
import Onbording from "./pages/Onboarding/Onboarding"
import SelectCategory from "./pages/SelectCategory/SelectCategory"
import HomePage from './pages/HomePage/HomePage';
import Entertainment from "./pages/Entertainment/Entertainment"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<Register />} />
        <Route path="/onboarding" element={<Onbording />} />
        <Route path="/SelectCategory" element={<SelectCategory />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        {/* <Route path="*" element={<NoPage />} /> */}
       
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
