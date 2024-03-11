import React from 'react'
import "../css/Main.css"
import CardItems from "../components/CardItems"
import BasicPagination from '../components/Panigation';


function Main({ coinData, totalPosts, postPerPage, setCurrentPage, currentPage }) {
    return (
        <div div className='container' >
            <div className='all-item'>
                <div className='card-item'>
                    <CardItems coinData={coinData} />
                </div>
                <BasicPagination totalPosts={totalPosts} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
            <div className="">
            </div>
        </div >
    )
}

export default Main
