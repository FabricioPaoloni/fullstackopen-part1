import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return(
      <p>{props.text}: {props.statistic}</p>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad) === 0 ? 1 : good + neutral + bad

  const handleClick = {
    //and object composed of 3 functions: good, neutral and bad used to change each of those states 
    good: () => {
      let aux = good + 1
      setGood(aux)
    },
    neutral: () => {
      let aux = neutral + 1
      setNeutral(aux)
    },
    bad: () => {
      let aux = bad + 1
      setBad(aux)
    }
  }

  return (
    <>
      <h2>Give us feedback:</h2>
      <Button onClick={handleClick.good} text="good" />
      <Button onClick={handleClick.neutral} text="neutral" />
      <Button onClick={handleClick.bad} text="bad" />
      <h2>Session statistics:</h2>
      <Statistics text="Good" statistic={good} />
      <Statistics text="Neutral" statistic={neutral} />
      <Statistics text="Bad" statistic={bad} />
      <Statistics text="All" statistic={good + neutral + bad} />
      <Statistics text="Average" statistic={(good - bad) / all} />
      <Statistics text="Percentage of positive score" statistic={good / all * 100 + " %"} /> 
    </>
  )
}

export default App
