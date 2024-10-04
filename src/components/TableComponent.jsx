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
  const [products, setProducts] = useState(props.products);
  const [productName, setProductName] = useState("");

  function updateProducts(value) {
    setProductName(value);
    // console.log(value);
    console.log(products);
    let updProducts = products.filter((prod) =>
      // console.log(prod.name)
      prod.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(updProducts);
    console.log("updated products", updProducts);
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
