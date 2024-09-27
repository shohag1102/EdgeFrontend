import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  ButtonGroup,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

function FirstComponent() {
  return (
    <div>
      <Button variant="contained">Submit</Button>
      <Button variant="text">Submit 2</Button>
      <Button variant="outlined">Submit 3</Button>

      <div
        style={{
          width: "50%",
          margin: "10px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          style={{ padding: "10px" }}
          id="outlined-basic"
          type="text"
          label="Name"
          variant="outlined"
        />
        <TextField
          style={{ padding: "10px" }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          style={{ padding: "10px", marginBottom: "20px" }}
        >
          Submit form
        </Button>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            style={{ padding: "10px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Slider
          size="medium"
          defaultValue={48}
          valueLabelDisplay="auto"
          aria-label="Medium"
        />
        <ButtonGroup variant="outlined" color="secondary" aria-label="">
          <Button>Hello</Button>
          <Button>Hello 2</Button>
        </ButtonGroup>
        <AppBar position="fixed" color="primary">
          <Toolbar style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'0 20px'
          }}>
            <Typography variant="h6">Logo</Typography>
            <div style={{
              display:'flex',
              justifyContent:'space-around',
              gap:'5px'
            }}>
              <Typography style={{cursor:"pointer"}} variant="h6">Home</Typography>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Contact Us</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default FirstComponent;
