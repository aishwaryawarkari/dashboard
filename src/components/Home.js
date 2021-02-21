import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { OutlinedCard, OtherFoldersCard, FavFolderCard } from "./Card";
import BarChart from "./Chart/BarChart";
import DonutChart from "./Chart/DonutChart";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={9}>
        <Grid item xs={8}>
          <Grid container spacing={8}>
            <Grid item xs={4}>
              <OutlinedCard value="photos" progress="25" url="folder.png" />
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard value="songs" progress="75" url="folder2.png" />
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard value="documents" progress="45" url="folder3.png" />
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: "50px" }}>
            <Grid item xs={12}>
              <BarChart />
            </Grid>
          </Grid>
          <h1 style={{ marginTop: "30px" }}>My favorite</h1>
          <p style={{ marginTop: "-20px" }}>Photos, Videos, Documents</p>
          <Grid container style={{ marginTop: "7px" }} spacing={3}>
            <Grid item xs={6}>
              <FavFolderCard title="Photos" />
            </Grid>
            <Grid item xs={6}>
              <FavFolderCard title="Videos" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <DonutChart />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1>Other Folders</h1>
              <p style={{ marginTop: "-20px" }}>Documents</p>
              <OtherFoldersCard
                color="#fbdede"
                title="Products"
                file="150"
                url="folder4.png"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OtherFoldersCard
                color="#fbdede"
                title="Web Design"
                file="1200"
                url="folder5.png"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <OtherFoldersCard
                color="#fbdede"
                title="Photos"
                file="15440"
                url="folder6.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
