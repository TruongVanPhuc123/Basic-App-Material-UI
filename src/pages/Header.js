
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../context/AuthContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Login from "../components/Login"

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function SearchAppBar() {
    const auth = React.useContext(AuthContext);
    const { user } = auth;
    const { logout } = auth;
    console.log(user);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (user) {
            navigate("/");
            const { user } = ''
            logout(user)
        } else {
            navigate("/login");
        }
    };
    // const [name, setName] = useState(<Login />)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#3d4349" }}>
                <Toolbar sx={{ justifyContent: "space-around" }}>
                    <Box display={"flex"} alignItems={"center"} gap={5}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: "none", sm: "contents" } }}
                        >
                            Job Routing
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Typography
                            sx={{
                                display: { xs: "contents", sm: "none" },
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <AccountCircleIcon />
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            {user ? <>
                                Hello {user.username} <LogoutIcon />
                            </> : ""}
                        </Typography>
                        <Button
                            onClick={handleLogin}
                            color="inherit"
                            sx={{ display: { xs: "none", sm: "contents" } }}
                        >
                            {user ? "Logout" : <Link to="/login"><Button sx={{ color: "white" }}>Login</Button></Link>}

                        </Button>
                        <Typography>
                            <MoreVertIcon sx={{ display: { xs: "block", sm: "none" } }} />
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
