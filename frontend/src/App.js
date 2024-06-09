import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./authComponents/Login";
import Register from "./authComponents/Register";
import MainLayout from "./layout/MainLayout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") || false
  );

  useEffect(() => {
    localStorage.setItem("auth", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
