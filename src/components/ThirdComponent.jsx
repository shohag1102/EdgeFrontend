// this is name constant
const name = "Shohag";

// returns a string
function text() {
  return "Hello";
}

const ThirdComponent = (props) => {
  const { student } = props;

  return (
    <div>
      {/* My name is {name}, {text()}
      <br />
      {name}
      {roll}
      {emoji}
      <br />
      {fruits.length}
      <br />
      Summation is = {sum(3, 4)}
      {FourthComponent} */}
      {/* Student info */}
      {student.name}
      {student.roll}
      {student.emoji}
      {
        <ol>
          {student.fav_foods.map((fav_food) => {
            return <li>{fav_food}</li>;
          })}
        </ol>
      }
      {student.fav_color}
    </div>
  );
};

export default ThirdComponent;
