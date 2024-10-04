import Component4 from "./components/Component4";
import ProductDetails from "./components/ProductDetails";
import TableComponent from "./components/TableComponent";
import Table from "./components/TableComponent";

function App() {
  const studentDetails = [
    {
      id: 1,
      name: "John Doe",
      age: 20,
    },
    {
      id: 2,
      name: "John Cena",
      age: 30,
    },
    {
      id: 3,
      name: "John Mena",
      age: 40,
    },
    {
      id: 4,
      name: "John Dena",
      age: 25,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Bag",
      desc: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      id: 2,
      name: "Mobile",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 3,
      name: "Laptop",
      desc: "lorem ipsum dolor sit amet, consectetur ",
    },
    {
      id: 4,
      name: "Desktop",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing dfahlshdf ehf hdljfaldj ",
    },
  ];

  return (
    <>
      {/* <Component4 studentDetails={studentDetails} /> */}
      {/* <ProductDetails products={products}/> */}
      <TableComponent products={products} />
    </>
  );
}

export default App;
