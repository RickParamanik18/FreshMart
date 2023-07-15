import { Button } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/user.service";

export const LoginForm = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            email: e.target.elements[0].value,
            password: e.target.elements[2].value,
        };
        login(formData).then((data) => {
            alert(data.msg);
            data.status == "200" && navigate("/");
        });
        // console.log(formData);
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <Stack alignItems={"center"}>
                    <Typography variant="h5" mb={5}>
                        Login
                    </Typography>
                    <TextField
                        name="email"
                        type="email"
                        required
                        label="Enter Email"
                        variant="outlined"
                        sx={{ marginBottom: "15px", width: "100%" }}
                    />
                    <TextField
                        name="password"
                        type="password"
                        required
                        label="Enter Password"
                        variant="outlined"
                        sx={{ marginBottom: "30px", width: "100%" }}
                    />
                    <Button variant="contained" size="large" type="submit">
                        Login
                    </Button>
                </Stack>
            </form>
            <Typography variant="body2" mt={1} sx={{ cursor: "pointer" }}>
                <Link to={"/signin"}>Forgot Password?</Link>
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
                Don't have an account, <Link to={"/signin"}>Signin</Link>
            </Typography>
        </>
    );
};
