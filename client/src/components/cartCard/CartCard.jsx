import {
    Typography,
    Button,
    TextField,
    MenuItem,
    Grid,
    Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import pic from "../../../public/banner.png";
import { useEffect, useState } from "react";

export const CartCard = () => {
    const props = {
        _id: "2",
        name: "Onion (Pyaz)",
        sub_category_id: "SC_1",
        veg_egg_non: "veg",
        image: "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920213/grocery/fresh_vegetables/2_g4ecfh.webp",
        rating: 3.5,
        delivery_time_in_mins: 21,
        item_variant: [
            {
                _id: "V_2",
                unit: "1 kg",
                price: 19,
                in_stock: true,
                default: true,
            },
            {
                _id: "V_3",
                unit: "2 kg",
                price: 38,
                in_stock: true,
                default: false,
            },
            {
                _id: "V_4",
                unit: "5 kg",
                price: 89,
                in_stock: false,
                default: false,
            },
        ],
    };

    const [quantity, setQuantity] = useState("");
    const [units, setUnits] = useState(1);

    const quantityCahngeHandler = (e) => {
        setQuantity(+e.target.value);
    };

    useEffect(() => {
        //api call
        setQuantity(props.item_variant?.[0]?.price);
    }, []);

    return (
        <Box>
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
                            defaultValue={1}
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
            <Divider sx={{ margin: "10px 0px" }} />
        </Box>
    );
};
