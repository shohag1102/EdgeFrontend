import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const FirstComponent = () => {
  const [count, setCount] = useState(0);

  // function handleClick(e) {
  //   console.log("Button clicked");
  //   alert("button clicked");
  // }
  //   const handleClick = (e) => {
  //     console.log("Button clicked");
  //     alert("Button clicked");
  //   };
  //   const handleTextChange = (e) => {
  //     console.log(e.target.value);
  //   };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleIncrement}>
        Increment
      </Button>
      <p>Count: {count}</p>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Decrement
      </Button>
      {/* <TextField type="text" label="Name" onChange={handleTextChange} /> */}
    </div>
  );
};

export default FirstComponent;
