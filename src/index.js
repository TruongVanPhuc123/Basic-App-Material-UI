import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import AboutItem from "./components/AboutItem"
import DetailJob from './components/DetailJob';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about/:id" element={<DetailJob />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals