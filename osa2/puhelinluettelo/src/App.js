import React from 'react';
import Henkilo from './components/Henkilo'
import LisaaHenkilo from './components/LisaaHenkilo'
import SuodataHenkilo from './components/SuodataHenkilo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    persons: [
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Martti Tienari', number: '040-123456' },
      { name: 'Arto Järvinen', number: '040-123456' },
      { name: 'Lea Kutvonen', number: '040-123456' }
    ],
    newName: '',
    newNumber: '',
    filter: ''
  	}
  }

  handleChange = (field) => {
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

	addPerson = (event) => {
    event.preventDefault()

	  const personObject = {
	      name: this.state.newName,
        number: this.state.newNumber,
	    }

	  const persons = this.state.persons.concat(personObject)

    if (this.state.persons.some(persons => persons.name === this.state.newName) === false) {
      this.setState({
      persons,
      newName: '',
      newNumber: ''
    });
    }
    else {
      alert ('Nimi on jo käytössä!');
    }
	}

  render() {

    const shownPersons = (filter) => {
      return (
        this.state.persons.filter(person=>person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      )
    }

    return (

      <div>
        <h2>Puhelinluettelo</h2>
        <SuodataHenkilo
          handlechange={this.handleChange}
          filter={this.state.filter}
        />
        <h2>Lisää uusi</h2>
        <LisaaHenkilo
        	newname={this.state.newName}
          newnumber={this.state.newNumber}
        	handlechange={this.handleChange}
          addperson={this.addPerson}
          />
        <h2>Numerot</h2>
        { shownPersons(this.state.filter).map(person=><Henkilo key={person.name} person={person} />) }
      </div>

    )
  }
}

export default App
