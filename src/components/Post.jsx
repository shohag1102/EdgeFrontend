import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

const Post = () => {
  const [fruitName, setFruitName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // post functionality using fetch
    try {
      const response = await fetch(
        "http://10.19.88.231:8081/test_api/post_api.php",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: fruitName,
          }),
        }
      );
      const data = await response.json();
      setResponseMessage(data.message);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      setResponseMessage("Failed to post");
    } finally {
      //
    }
  };
  return (
    <div>
      <TextField
        id="post"
        label="Enter a fruit name..."
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
      />
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Post;
