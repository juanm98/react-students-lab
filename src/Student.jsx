import Score from "./Score";

const Student = (props) => {
  return (
    <div>
    <h2>
      {props.student.name}
    </h2>
    <h3>
      {props.student.bio}
    </h3>
    <h4>
    {props.student.scores.map((score, idx) =>
    <Score score={ score } studentName={ props.student.name } key={idx}/>
    )}
    </h4>
    </div>
  )
}

export default Student;