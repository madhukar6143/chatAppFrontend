import "./App.css";
import {  Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/register"; 
import Chatpage from "./pages/chatpage";
import Login from "./components/login"; 

import { AuthProvider } from "./context/context"; // Add this
import ProtectedRoute from "./components/protectedroute"; //Add this


export  const URL = "https://chatapp-enlt.onrender.com"


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route // Add this route
          path="/"
          element={
            <ProtectedRoute>
              <Chatpage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
    </AuthProvider>
  );
}

export default App;
