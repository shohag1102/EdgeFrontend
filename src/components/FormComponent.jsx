import CheckboxComponent from "./component1/checkBox/Checkbox";

const FormComponent = (props) => {
  const { textBox, checkBox, radioButton, select, autoComplete, button } =
    props.formElements;

  return (
    <div
      style={{
        width: "40%",
        margin: "10px auto",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
    >
      {textBox}
      {checkBox}
      {radioButton}
      {select}
      {autoComplete}
      {button}
    </div>
  );
};

export default FormComponent;
