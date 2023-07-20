import { Typography, TextField, MenuItem, Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { cart } from "../../services/user.service";
import { authContext } from "../../context/auth.context";

export const CartCard = (props) => {
    const [quantity, setQuantity] = useState("");
    const [units, setUnits] = useState(props.default.units);
    const { token, isLoggedIn, userData, setAuthData } =
        useContext(authContext);

    const quantityCahngeHandler = (e) => {
        setQuantity(+e.target.value);
    };

    const toCart = async (operation) => {
        try {
            const result = await cart(operation, props, token);
            if (result.status == 200) setAuthData();
        } catch {
            alert("something wet wrong");
        }
    };

    useEffect(() => {
        setQuantity(props.default.item_variant.price);
    }, []);


    return (
        <Box>
            <Divider sx={{ margin: "10px 0px" }} />
            <ClearOutlinedIcon
                onClick={() => toCart("remove")}
                sx={{ cursor: "pointer" }}
            />
            <Grid container>
                <Grid item container xs={10}>
                    <Grid item xs={12} sm={6}>
                        <Box
                            component={"img"}
                            src={props.image}
                            height={"150px"}
                            width={"150px"}
                        />
                        <Typography variant="body1">{props.name}</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <TextField
                            select
                            value={quantity}
                            helperText="Quantity"
                            style={{ minWidth: "150px" }}
                            onChange={quantityCahngeHandler}
                            size="small"
                        >
                            {props.item_variant
                                ? props.item_variant.map((item) => (
                                      <MenuItem
                                          key={item.unit}
                                          value={item.price}
                                      >
                                          {item.unit}
                                      </MenuItem>
                                  ))
                                : []}
                        </TextField>
                        <TextField
                            helperText="Units"
                            type="number"
                            sx={{ width: "80px" }}
                            size="small"
                            defaultValue={units}
                            InputProps={{ inputProps: { min: 1, max: 5 } }}
                            style={{ marginLeft: "5px" }}
                            onChange={(e) => setUnits(+e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={2} display={"flex"} alignItems={"center"}>
                    <Typography variant="body2">{`Rs. ${
                        quantity * units
                    }`}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
