const Score = (props) => {
  return (
    <div>
      {props.studentName} score: {props.score.score} on: {props.score.date}.
    </div>
  )
}

export default Score;