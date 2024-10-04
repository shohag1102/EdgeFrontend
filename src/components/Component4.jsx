import FirstComponent from "./FirstComponent";

const Component4 = (props) => {
  return (
    <div>
      {props.studentDetails.map((student) => (
        <div key={student.id}>
          {student.age > 25 ? <FirstComponent /> : <p>Age less than 25</p>}
        </div>
      ))}
    </div>
  );
};

export default Component4;
