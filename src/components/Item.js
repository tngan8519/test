import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Description from "./Description";
import Detail from "./Detail";

export default function Item({ item, i, loves, handleFavorite }) {
  const icon = useRef(null);

  useEffect(() => {
    if (loves[i]?.love === true) {
      icon.current.style.color = "red";
    } else {
      icon.current.style.color = "rgba(0, 0, 0, 0.54)";
    }
  }, [loves, i]);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 370,
      margin: 20,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: "#f44336",
    },
    cardHeader: {
      height: 120,
      backgroundColor: "#e3e3e3",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {item["solicitation_title"][0]}
          </Avatar>
        }
        title={item["solicitation_title"]}
        subheader={`Solicitation Number : ${item["solicitation_number"]}`}
      />
      <CardContent>
        <Description item={item} />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavorite(i)}
        >
          <FavoriteIcon ref={icon} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Solicitation Topics:</Typography>
          {item["solicitation_topics"]?.map((topic, id) => (
            <Detail key={id} topic={topic} />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
