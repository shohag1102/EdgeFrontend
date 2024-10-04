import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";

const TableComponent = (props) => {
  const [allProducts] = useState(props.products); // Keep the original list of products
  const [products, setProducts] = useState(props.products);
  const [productName, setProductName] = useState("");

  function updateProducts(value) {
    setProductName(value);

    if (value === "") {
      // If the search field is empty, reset products to the original list
      setProducts(allProducts);
    } else {
      let updProducts = allProducts.filter((prod) =>
        prod.name.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(updProducts);
    }
  }

  return (
    <div>
      <TextField
        type="text"
        label="Enter product name"
        value={productName}
        onChange={(e) => updateProducts(e.target.value)}
      />
      <p>{productName}</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">{product.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;