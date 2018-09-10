import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  addGood = () => {
    this.setState({
      good: this.state.good + 1
    })
  }

  addNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1
    })
  }

  addBad = () => {
    this.setState({
      bad: this.state.bad + 1
    })
  }

  render() {

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

    const Statistics = ({ counters }) => {
      return(
        <div>
        <h3>statistiikka</h3>
        <Statistic quality='hyvä' counter={counters.good}/>
        <Statistic quality='neutraali' counter={counters.neutral}/>
        <Statistic quality='huono' counter={counters.bad}/>
        <Statistic quality='keskiarvo' counter={parseFloat((counters.good-counters.bad)/sumValues(counters)).toFixed(2)}/>
        <Statistic quality='positiivisia' counter={parseFloat((counters.good)/sumValues(counters)*100).toFixed(1) + " %"}/>
        </div>
        )
    }

    const Statistic = ({ quality, counter }) => <div>{quality} {counter}</div>

    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
      <div>
        <h3>anna palautetta</h3>
        <div>
          <Button text='hyvä' handleClick={this.addGood}/>
          <Button text='neutraali' handleClick={this.addNeutral}/>
          <Button text='huono' handleClick={this.addBad}/>
        </div>
        <div>
        <Statistics counters={this.state}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
