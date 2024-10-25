import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

const Form = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name:", name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          variant="outlined"
          label="First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <Button
          variant="outlined"
          sx={{ padding: "15px", marginLeft: "20px" }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
