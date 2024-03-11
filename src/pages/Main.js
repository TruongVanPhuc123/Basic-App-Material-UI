import React from 'react'
import "../css/Main.css"
import CardItems from "../components/CardItems"
import BasicPagination from '../components/Panigation';


function Main({ coinData, totalPosts, postPerPage, setCurrentPage, currentPage }) {
    return (
        <div div className='container-main' >
            <div className='card-item'>
                <CardItems coinData={coinData} />
            </div>
            <div className='btn-pagination'>
                <BasicPagination totalPosts={totalPosts} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </div >
    )
}

export default Main
