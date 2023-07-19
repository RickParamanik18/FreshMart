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
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllProducts } from "../../services/product.service";
import { getInitials } from "../../utils/helper";
import { logout } from "../../services/user.service";
import { authContext } from "../../context/auth.context";

export const Nav = () => {
    const navigate = useNavigate();
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const { isLoggedIn, userData, token, setAuthData } =
        useContext(authContext);

    const toggleUserOptions = (val) => {
        typeof val === "boolean"
            ? setUserOptionsVisibility(val)
            : setUserOptionsVisibility((prev) => !prev);
    };
    useEffect(() => {
        getAllProducts().then((data) => {
            setAllProducts(data);
        });
    }, []);

    const cursor = { cursor: "pointer" };

    const getSearchResults = (query) => {
        if (query.trim().length) {
            const results = allProducts.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    const logoutHandler = async () => {
        const result = await logout(token);
        alert(result.msg);
        if (result.status == 200) {
            setAuthData();
            navigate("/");
        }
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
                        options={searchResults.map((item) => item.name)}
                        renderInput={(params) => (
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
                                //updating search results
                                onChange={() =>
                                    getSearchResults(params.inputProps.value)
                                }
                            />
                        )}
                        fullWidth
                        size="small"
                        //redirecting to the product page onoption select
                        onChange={(e) => {
                            const prodId = searchResults.filter(
                                (item) => item.name === e.target.textContent
                            )[0]._id;
                            navigate(`/product/${prodId}`, { replace: true });
                        }}
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
                                    badgeContent={Number(
                                        userData.wishlist
                                            ? userData.wishlist.length
                                            : 0
                                    )}
                                    color="primary"
                                    sx={{ mx: 1.5, ...cursor }}
                                    onClick={() => navigate("/wishlist")}
                                >
                                    <FavoriteBorderIcon />
                                </Badge>
                            </Tooltip>
                            <Tooltip title="My Cart">
                                <Badge
                                    badgeContent={Number(
                                        userData.cart ? userData.cart.length : 0
                                    )}
                                    color={"primary"}
                                    sx={{ mx: 1.5, ...cursor }}
                                    onClick={() => navigate("/cart")}
                                >
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </Tooltip>
                            {/* isLoggedin */}
                            {isLoggedIn ? (
                                <Button
                                    variant="outlined"
                                    sx={{ mx: 2, ...cursor }}
                                    onClick={logoutHandler}
                                >
                                    Logout
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    sx={{ mx: 2, ...cursor }}
                                    onClick={() => navigate("/login")}
                                >
                                    Login
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
                                    sx={{ background: "primary.light" }}
                                >
                                    {userData.name
                                        ? getInitials(userData.name)
                                        : "*"}
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
                                                badgeContent={Number(
                                                    userData.wishlist
                                                        ? userData.wishlist
                                                              .length
                                                        : 0
                                                )}
                                                color="primary"
                                                sx={{ my: 1, ...cursor }}
                                                onClick={() =>
                                                    navigate("/wishlist")
                                                }
                                            >
                                                <FavoriteBorderIcon />
                                            </Badge>
                                        </Tooltip>
                                        <Tooltip title="My Cart">
                                            <Badge
                                                badgeContent={Number(
                                                    userData.cart
                                                        ? userData.cart.length
                                                        : 0
                                                )}
                                                color={"primary"}
                                                sx={{ my: 1, ...cursor }}
                                                onClick={() =>
                                                    navigate("/cart")
                                                }
                                            >
                                                <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </Tooltip>
                                        {isLoggedIn ? (
                                            <Tooltip
                                                title="Logout"
                                                onClick={logoutHandler}
                                            >
                                                <LogoutOutlinedIcon
                                                    sx={{ my: 1, ...cursor }}
                                                />
                                            </Tooltip>
                                        ) : (
                                            <Tooltip
                                                title="Login"
                                                sx={cursor}
                                                onClick={() =>
                                                    navigate("/login")
                                                }
                                            >
                                                <LoginOutlinedIcon
                                                    sx={{ my: 1, ...cursor }}
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
