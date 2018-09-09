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

    const Statistics = (props) => {
      return(
        <div>
        <h3>statistiikka</h3>
        <Statistic quality='hyvä' counter={this.state.good}/>
        <Statistic quality='neutraali' counter={this.state.neutral}/>
        <Statistic quality='huono' counter={this.state.bad}/>
        <Statistic quality='keskiarvo' counter={parseFloat((this.state.good-this.state.bad)/sumValues(this.state)).toFixed(2)}/>
        <Statistic quality='positiivisia' counter={parseFloat((this.state.good)/sumValues(this.state)*100).toFixed(1) + " %"}/>
        </div>
        )
    }

    const Statistic = (props) => <div>{props.quality} {props.counter}</div>

    return (
      <div>
        <h3>anna palautetta</h3>
        <div>
          <button onClick={this.addGood}>
            hyvä
          </button>
          <button onClick={this.addNeutral}>
            neutraali
          </button>
          <button onClick={this.addBad}>
            huono
          </button>
        </div>
        <div>
        <Statistics counter={this.state}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
