import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Testing image import
// import cardImage from "../../images/boarding-app.png";

export default function Projects(props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
        padding: "3px",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={props.Img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
