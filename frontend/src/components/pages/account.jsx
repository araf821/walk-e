import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness1 from "@mui/icons-material/Brightness1";
import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Account() {
  const navigate = useNavigate();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  let today = 2;
  let total = 15;
  let rank = 342;
  let streak = 12;
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "CadetBlue", width: 100, height: 100 }}>
          AAA
        </Avatar>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 2 }}
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </Button>
      </Box>
      <Card sx={{ m: 1, p: 0.5 }}>
        <Typography alignItems="left">Global Rank: {rank}</Typography>
      </Card>
      <Card sx={{ m: 1, p: 0.5 }}>
        <Typography variant="h5" alignItems="left">
          Challenges Completed
        </Typography>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <Brightness1 sx={{ fontSize: "small" }} />
            </ListItemIcon>
            <ListItemText primary={`Today: ${today}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Brightness1 sx={{ fontSize: "small" }} />
            </ListItemIcon>
            <ListItemText primary={`Total: ${total}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Brightness1 sx={{ fontSize: "small" }} />
            </ListItemIcon>
            <ListItemText primary={`Streak: ${streak}`} />
          </ListItem>
        </List>
      </Card>
    </Container>
  );
}
