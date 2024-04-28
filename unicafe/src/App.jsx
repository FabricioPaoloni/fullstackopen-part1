import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const LineStatistics = (props) => {
  return(
      <p>{props.text}: {props.statistic}</p>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  return(
    <>
      <h2>Session statistics:</h2>
      <LineStatistics text="Good" statistic={good} />
      <LineStatistics text="Neutral" statistic={neutral} />
      <LineStatistics text="Bad" statistic={bad} />
      <LineStatistics text="All" statistic={good + neutral + bad} />
      <LineStatistics text="Average" statistic={(good - bad) / all} />
      <LineStatistics text="Percentage of positive score" statistic={good / all * 100 + " %"} />
    </>
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </>
  )
}

export default App
