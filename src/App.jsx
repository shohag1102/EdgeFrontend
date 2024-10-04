import Component4 from "./components/Component4";

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
  return (
    <>
      <Component4 studentDetails={studentDetails} />
    </>
  );
}

export default App;
