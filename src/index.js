import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './pages/Header'
import Main from './pages/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='header' element={<Header />} />
        <Route path='login' element={<Header />} />
        <Route path='main' element={<Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals