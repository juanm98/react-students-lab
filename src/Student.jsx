import Score from "./Score"

const Student = (props) => {
  return ( 
    <>
    <h2>Students component</h2>
    <h2>{props.students.name}</h2>
    <h3>{props.students.bio}</h3>
    <Score/>
    </>
  );
}

export default Student;