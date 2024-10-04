import Button from "@mui/material/Button";
import { useState } from "react";
const ProductDetails = (props) => {
  const [desc, setDesc] = useState("");
  const showDetails = (details) => {
    console.log(details);
    setDesc(details);
  };
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <Button
            sx={{
              marginBottom: "10px",
            }}
            variant="contained"
            color="primary"
            onClick={() => showDetails(product.desc)}
          >
            {product.name}
          </Button>
        </div>
      ))}
      <p>{<p>{desc}</p>}</p>
    </div>
  );
};

export default ProductDetails;
