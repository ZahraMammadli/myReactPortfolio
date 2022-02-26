import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#59656f",
    clear: "both",
    position: "relative",
    bottom: "0",
    // width: `calc(100% - ${drawerWidth}px)`,
  },
  footer: {
    fontSize: 30,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography variant="h6" className={classes.footer}>
        <div className="colz">
          <a href="https://www.linkedin.com/in/zahramammadli/">
            <LinkedInIcon color="disabled" />
          </a>
          <a href="https://github.com/ZahraMammadli">
            <GitHubIcon color="disabled" />
          </a>
          <a href="https://www.youtube.com/channel/UC5lAcTea-glwfFR7gmZzl5Q">
            <YouTubeIcon color="disabled" />
          </a>
        </div>
      </Typography>
    </AppBar>
  );
}

export default Footer;
