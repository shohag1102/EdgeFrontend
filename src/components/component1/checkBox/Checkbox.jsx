import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";
function CheckboxComponent() {
  return (
    <div>
      <h1>Select your course</h1>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Frontend"
        />
        <FormControlLabel control={<Checkbox />} label="Backend" />
        <FormControlLabel control={<Checkbox />} label="Both" />
      </FormGroup>
    </div>
  );
}

export default CheckboxComponent;
