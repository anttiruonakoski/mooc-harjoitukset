import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({ nimi }) => {
	return (
		<div>
			<h1>{nimi}</h1>
		</div>
	)
}

const Sisalto = ({ osat }) => {
	return (
		<div>
			{osat.map(osa=><Osa osa={osa} />)}
		</div>
	)
}

const Yhteensa = ({ osat }) => {
	return (
		<div>
			yhteensä {osat.reduce(function (acc, current) {
				return (acc + current.tehtavia)
			}, 0)
			} tehtävää
		</div>
		)
}

const Osa = ({ osa }) => {
	return (
		<div>
			<p>{osa.nimi} {osa.tehtavia}</p>
		</div>
	)
}

const Kurssi = ({ kurssi }) => {
	return (
		<div>
			<Otsikko nimi={kurssi.nimi}/>
			<Sisalto osat={kurssi.osat}/>
			<Yhteensa osat={kurssi.osat} />
		</div>
	)
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    	<h1>Opetusohjelma</h1>
      { kurssit.map(kurssi => <Kurssi kurssi={kurssi} />) }
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)