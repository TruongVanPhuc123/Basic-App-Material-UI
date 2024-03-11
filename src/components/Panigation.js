import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import { Button } from '@mui/material';
import "../css/App.css"
import PaginationNew from './PaginationNew';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        active: {
            main: blue[500],
        }
    },
})

const handleChange = (e, page) => {
    console.log(page)
}

export default function BasicPagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
    let pages = []

    for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
        pages.push(index)
        console.log(totalPosts, postPerPage,)
    }

    return (
        <div className='btn-group'>
            <Stack spacing={2} sx={{ color: "white", flexDirection: "row", gap: 10 }}>
                <ThemeProvider theme={theme}>
                    <PaginationNew setCurrentPage={setCurrentPage} pages={pages} />
                    {/* {pages.map((page, index) => {
                        // return <PaginationNew page={page} index={index} setCurrentPage={setCurrentPage} />
                        return <Button key={index}
                            sx={{ width: "200px" }}
                            variant="outlined"
                            onClick={() => setCurrentPage(page)}>
                            {page}</Button>

                    })} */}
                </ThemeProvider>
            </Stack>
        </div>
    );
}   