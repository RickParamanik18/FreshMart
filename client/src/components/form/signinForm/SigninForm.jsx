import { Button, Snackbar } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../../services/user.service";

export const SigninForm = () => {
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.elements[0].value,
            email: e.target.elements[2].value,
            password: e.target.elements[4].value,
        };
        signin(formData).then((data) => {
            alert(data.msg);
            data.status == "200" && navigate("/");
        });
    };
    const commonInputStyle = { marginBottom: "15px", width: "100%" };
    return (
        <>
            <form encType="multipart/form-data" onSubmit={submitHandler}>
                <Stack alignItems={"center"}>
                    <Typography variant="h5" mb={5}>
                        Signin
                    </Typography>
                    <TextField
                        name="name"
                        required
                        label="Enter Name"
                        variant="outlined"
                        sx={commonInputStyle}
                    />
                    <TextField
                        name="email"
                        type="email"
                        required
                        label="Enter Email"
                        variant="outlined"
                        sx={commonInputStyle}
                    />
                    <TextField
                        name="password"
                        type="password"
                        required
                        label="Enter Password"
                        variant="outlined"
                        sx={{ ...commonInputStyle, marginBottom: "30px" }}
                    />
                    <Button variant="contained" size="large" type="submit">
                        Signin
                    </Button>
                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        Already have an account,{" "}
                        <Link to={"/login"}>Login</Link>
                    </Typography>
                </Stack>
            </form>
        </>
    );
};
