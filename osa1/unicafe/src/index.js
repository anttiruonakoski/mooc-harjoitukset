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

  addGeneric = (value) => {
    return () => {
    this.setState({ [value]: this.state[value] + 1 })
    }
  }


  render() {

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

    const Statistics = ({ counters }) => {
      if (counters.good > 0 || counters.neutral > 0 || counters.bad > 0) {
      return(
        <div>
        <table>
        <Statistic quality='hyvä' counter={counters.good}/>
        <Statistic quality='neutraali' counter={counters.neutral}/>
        <Statistic quality='huono' counter={counters.bad}/>
        <Statistic quality='keskiarvo' counter={parseFloat((counters.good-counters.bad)/sumValues(counters)).toFixed(2)}/>
        <Statistic quality='positiivisia' counter={parseFloat((counters.good)/sumValues(counters)*100).toFixed(1) + " %"}/>
        </table>
        </div>
        )
      }
      else {
        return (
          <div>ei yhtään palautetta annettu</div>
        )
      }
    }


    const Statistic = ({ quality, counter }) => <tr><td>{quality}</td> <td>{counter}</td></tr>

    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
      <div>
        <h2>anna palautetta</h2>
        <div>
          <Button text='hyvä' handleClick={this.addGeneric('good')}/>
          <Button text='neutraali' handleClick={this.addGeneric('neutral')}/>
          <Button text='huono' handleClick={this.addGeneric('bad')}/>
        </div>
        <div>
        <h2>statistiikka</h2>
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
