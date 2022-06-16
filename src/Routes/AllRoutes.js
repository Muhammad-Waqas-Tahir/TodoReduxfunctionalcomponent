import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "../Components/AddTodo";
import EditTodo from "../Components/EditTodo";
import FourZeroFour from "../Components/FourZeroFour";
import Login from "../Components/Login";
import ProtectRoute from "../Components/ProtectRoute";
import ShowTodo from "../Components/ShowTodo";

const protectedRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route path="/ShowTodo" element={<ShowTodo />} />;
  } else {
    return <Login />;
  }
};
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/ShowTodo"
          element={<ProtectRoute Component={ShowTodo} />}
        />
        <Route path="/add" element={<ProtectRoute Component={AddTodo} />} />
        <Route
          path="/edit/:id"
          element={<ProtectRoute Component={EditTodo} />}
        />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
