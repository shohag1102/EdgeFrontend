import CheckboxComponent from "./components/component1/checkBox/Checkbox";
import Textbox from "./components/component1/textBox/Textbox";
import ButtonComponent from "./components/component2/button/ButtonComponent";
import RadioButton from "./components/component2/radioButton/RadioButton";
import AutoComplete from "./components/component3/autoComplete/AutoComplete";
import Select from "./components/component3/select/SelectComponent";
import FormComponent from "./components/FormComponent";
import FourthComponent from "./components/FourthComponent";
import ProductTable from "./components/ProductTable";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  const array = ["Apple", "Banana", "Guava", "Orange"];

  function sum(a, b) {
    return a + b;
  }

  const student = {
    name: "Saikat Hossain Shohag",
    roll: "1904088",
    emoji: "😘🙌",
    fav_foods: ["Biriani", "Kacchi", "Polao"],
    fav_color: "Blue",
  };

  const products = [
    {
      prod_id: 1,
      name: "Apple",
      details: "This is the Apple company phone",
      price: 100,
      variants: ["pro", "pro-max"],
    },
    {
      prod_id: 2,
      name: "Samsung",
      variants: ["pro", "pro-max"],
      details: "This is the Samsung company phone",
      price: 150,
    },
    {
      prod_id: 3,
      name: "Google Pixel",
      details: "This is the Google company phone",
      price: 200,
      variants: ["pro", "pro-max"],
    },
    {
      prod_id: 4,
      name: "Xiaomi",
      details: "This is the Xiaomi company phone",
      price: 130,
      variants: ["pro", "pro-max"],
    },
  ];

  const formElements = {
    textBox: <Textbox />,
    checkBox: <CheckboxComponent />,
    radioButton: <RadioButton/>,
    select: <Select />,
    autoComplete: <AutoComplete />,
    button: <ButtonComponent/>,
  };

  return (
    // <div
    //   style={{
    //     width: "40%",
    //     margin: "10px auto",
    //     backgroundColor: "white",
    //     padding: "20px",
    //     borderRadius: "10px",
    //     boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    //   }}
    // >
    //   <Textbox />
    //   <Checkbox />
    //   <RadioButton />
    //   <Select />
    //   <AutoComplete />
    //   <ButtonComponent />
    // </div>
    // <div>
    //   <SecondComponent/>
    // </div>
    // <ThirdComponent
    //   // name="Saikat"
    //   // roll="1904088"
    //   // emoji="😊 ❤️"
    //   // fruits={array}
    //   // sum={sum}
    //   // FourthComponent={<FourthComponent />}
    //   student={student}
    // />
    // <ProductTable products={products} />
    <FormComponent formElements = {formElements}/> 
  );
}

export default App;
