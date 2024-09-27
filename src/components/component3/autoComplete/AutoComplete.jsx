import { Autocomplete, TextField } from "@mui/material";
import top100Films from "./top100Films";

function AutoComplete() {
  return (
    <div>
      <Autocomplete
        disablePortal
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

export default AutoComplete