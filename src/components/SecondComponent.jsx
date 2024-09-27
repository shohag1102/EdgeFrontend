import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const SecondComponent = () => {
  let [loading, setLoading] = useState("true");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate loading data
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {loading ? (
        <Skeleton variant="rectangular" width={"100%"} height={140} />
      ) : (
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3aCQLkM7AuWdXOcYdFia4gkKxNI-se6Yhw&s"
          title="green iguana"
        />
      )}
      <CardContent>
        {loading ? (
          <Skeleton variant="text" sx={{ height: "32px" }} />
        ) : (
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        )}
        {loading ? (
          <Skeleton variant="text" sx={{ width: "100%", height: "60px" }} />
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Share {loading}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SecondComponent;
