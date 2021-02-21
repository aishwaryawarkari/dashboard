import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Progress from "./Progress";
import Grid from "@material-ui/core/Grid";
import Avatar from "./Avatar";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: "15px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <img src={props.url} />
        <h4 style={{ marginTop: "-4px" }}>{props.value}</h4>
        <Progress value={props.progress} />
      </CardContent>
    </Card>
  );
}
export function OtherFoldersCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{
        marginTop: "10px",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={2}>
            <img src={props.url} style={{ marginTop: "15px" }} />
          </Grid>
          <Grid item xs={10}>
            <h3>{props.title}</h3>
            <p style={{ marginTop: "-20px" }}>{props.file} files</p>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export function FavFolderCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{
        backgroundColor: props.color,
        marginTop: "10px",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <h3>{props.title}</h3>
            <p style={{ marginTop: "-20px" }}>4,524 Files</p>
          </Grid>

          <Grid item xs={6}>
            <Avatar />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
