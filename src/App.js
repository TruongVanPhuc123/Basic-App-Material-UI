import './css/App.css';
import React from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Data from "./data.json"
import Login from "./components/Login"
import { Outlet } from 'react-router-dom';


function App() {
  const [coinData, setCoinData] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postPerPage, setPostPerPage] = React.useState(3)

  React.useEffect(() => {
    setCoinData(Data)
  }, [])

  const lastPostIndex = currentPage * postPerPage;
  const firtPostIndex = lastPostIndex - postPerPage;
  const currentPost = coinData.slice(firtPostIndex, lastPostIndex)


  return (
    <div>
      <Header></Header>
      <Main coinData={currentPost} totalPosts={coinData.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
