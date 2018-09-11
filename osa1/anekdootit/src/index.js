import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: new Array(6).fill(0)
    }
  }

  selectRandom = () => {
  	function getRandomInt(max) {
  		return Math.floor(Math.random() * Math.floor(max));
  	}
    this.setState({ selected: getRandomInt(6) })
  }

  addVote = (selected) => {
    return () => {
    const c = [...this.state.votes]
		c[selected] += 1
    this.setState({ votes: c })
    }
  }

  render() {

    const votes = this.state.votes
    const mostVotes = votes.indexOf(Math.max(...votes))

	  const Anecdote = ({ selected }) => {
	  	return (
				<div>
	        {this.props.anecdotes[selected]} <br/>
	        has {this.state.votes[selected]} votes
	      </div>
	  		)
	  }

	  const NextButton = () => {
	  	return (
	  		<button onClick={this.selectRandom}>
	  		next anecdote
	  		</button>
	  	)
	  }

	  const VoteButton = ({ selected }) => {
	  	return (
	  		<button onClick={this.addVote(selected)}>
	  		vote
	  		</button>
	  	)
	  }

    return (
    	<div>
        <Anecdote selected={this.state.selected} />
        <VoteButton selected={this.state.selected} />
        <NextButton />
        <h2>anecdote with most votes:</h2>
        <Anecdote selected={mostVotes} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)