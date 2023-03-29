import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Lemon from "../../Assets/img/lemon dessert.jpg";
import Salad from "../../Assets/img/greek salad.jpg";
import Bruchetta from "../../Assets/img/bruchetta.svg";

const HighlightCard = () => {
  return (
    <Grid container sx={{ paddingTop: 5 }} spacing={6}>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia sx={{ height: 140 }} image={Salad} title="Green Salad" />
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="h3">
                Green Salad
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="p">
                $99.99
              </Typography>
            </Box>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                color: "#333333",
                textTransform: "capitalize",
              }}>
              Order a delivery
            </Button>{" "}
            <DeliveryDiningIcon />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia sx={{ height: 140 }} image={Bruchetta} title="Bruchetta" />
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="h3">
                Bruchetta
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="p">
                $8.99
              </Typography>
            </Box>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                color: "#333333",
                textTransform: "capitalize",
              }}>
              Order a delivery
            </Button>{" "}
            <DeliveryDiningIcon />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia sx={{ height: 140 }} image={Lemon} title="Dessert Lemon" />
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="h3">
                Lemon Dessert
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="p">
                $9.99
              </Typography>
            </Box>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                color: "#333333",
                textTransform: "capitalize",
              }}>
              Order a delivery
            </Button>{" "}
            <DeliveryDiningIcon />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HighlightCard;
