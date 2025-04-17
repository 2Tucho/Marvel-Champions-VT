import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import List from "./List/List.jsx";
import Villain from "./Villain/Villain.jsx";

function Main() {

  return <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/villain/:villainId" element={<Villain />} />
      </Routes>
    </div>;

}

export default Main;
