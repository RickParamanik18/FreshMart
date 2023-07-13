import {
    Autocomplete,
    Avatar,
    Badge,
    Box,
    Button,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Tooltip,
} from "@mui/material/";
import logo from "../../../public/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledGrid, StyledPaper } from "./style";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Nav = () => {
    const navigate = useNavigate();
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);

    const toggleUserOptions = (val) => {
        typeof val === "boolean"
            ? setUserOptionsVisibility(val)
            : setUserOptionsVisibility((prev) => !prev);
    };

    return (
        <StyledPaper>
            <StyledGrid container>
                <Grid
                    item
                    xs={3}
                    sm={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Box
                        component={"img"}
                        src={logo}
                        height={"50px"}
                        onClick={() => navigate("/")}
                        sx={{ cursor: "pointer" }}
                    ></Box>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sm={6}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={["result1", "result2"]}
                        renderInput={(params) => (
                            // console.log(params.inputProps.value),
                            <TextField
                                {...params}
                                placeholder={"Search"}
                                InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={4}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"end"}
                >
                    {/* isLargeDevice */}
                    {window.document.body.clientWidth >= 600 ? (
                        <>
                            <Tooltip title="My Wishlist">
                                <Badge
                                    badgeContent={1}
                                    color="primary"
                                    sx={{ mx: 1.5 }}
                                >
                                    <FavoriteBorderIcon />
                                </Badge>
                            </Tooltip>
                            <Tooltip title="My Cart">
                                <Badge
                                    badgeContent={1}
                                    color={"primary"}
                                    sx={{ mx: 1.5 }}
                                >
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </Tooltip>
                            {/* isLoggedin */}
                            {false ? (
                                <Button variant="contained" sx={{ mx: 2 }}>
                                    Login
                                </Button>
                            ) : (
                                <Button variant="outlined" sx={{ mx: 2 }}>
                                    Logout
                                </Button>
                            )}
                        </>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    position: "relative",
                                }}
                                tabIndex={0}
                                onBlur={() => toggleUserOptions(false)}
                            >
                                <Avatar
                                    onClick={toggleUserOptions}
                                    sx={{ background: "red" }}
                                >
                                    A
                                </Avatar>
                                <StyledPaper
                                    sx={{
                                        position: "absolute",
                                        top: "45px",
                                        right: "0px",
                                        display: userOptionsVisibility
                                            ? "block"
                                            : "none",
                                    }}
                                >
                                    <Stack>
                                        <Tooltip title="My Wishlist">
                                            <Badge
                                                badgeContent={1}
                                                color="primary"
                                                sx={{ my: 1 }}
                                            >
                                                <FavoriteBorderIcon />
                                            </Badge>
                                        </Tooltip>
                                        <Tooltip title="My Cart">
                                            <Badge
                                                badgeContent={1}
                                                color={"primary"}
                                                sx={{ my: 1 }}
                                            >
                                                <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </Tooltip>
                                        {/* isLoggedIn */}
                                        {true ? (
                                            <Tooltip title="Login">
                                                <LoginOutlinedIcon
                                                    sx={{ my: 1 }}
                                                />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip title="Logout">
                                                <LogoutOutlinedIcon
                                                    sx={{ my: 1 }}
                                                />
                                            </Tooltip>
                                        )}
                                    </Stack>
                                </StyledPaper>
                            </Box>
                        </>
                    )}
                </Grid>
            </StyledGrid>
        </StyledPaper>
    );
};
