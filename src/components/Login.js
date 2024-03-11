import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link, Outlet, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const theme = createTheme({
    palette: {
        width: {
            width: "100%",
        },
    },
});

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const loginValue = {
    email: "tvphuc2k4k@gmail.com",
    password: "123123",
};

export default function NestedModal() {
    const [open, setOpen] = React.useState(true);
    console.log(open);
    //sử dụng useContext() để lấy state, function
    const auth = React.useContext(AuthContext);
    const { login } = auth;
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState("password");

    const methods = useForm({ loginValue });

    const {
        handleSubmit,
        control,
        error,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = (data) => {
        const { email } = data;
        login(email, () => {
            navigate("/");
            setOpen(false);
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div>
                <Box sx={{ ...style, width: 500, height: 320 }}>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { mb: 1, width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant="h3" textAlign={"center"} mb={3}>
                                    Form Login
                                </Typography>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            {...field}
                                            label="Email"
                                            name="email"
                                            fullWidth
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    )}
                                ></Controller>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <TextField
                                            label="Password"
                                            name="password"
                                            error={!!error}
                                            helperText={error?.message}
                                            variant="outlined"
                                            {...field}
                                            sx={{ mb: 1, width: "100%" }}
                                            type={showPassword ? "password" : "text"}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            onMouseDown={(e) => e.preventDefault()}
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                ></Controller>
                                <LoadingButton
                                    sx={{ width: "100%" }}
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Login
                                </LoadingButton>
                            </form>
                        </div>
                    </Box>
                </Box>
            </div>
        </Modal>
    );
}
