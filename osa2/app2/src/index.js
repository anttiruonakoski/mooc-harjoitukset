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
		</div>
	)
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
      },{
        nimi: 'Redux',
        tehtavia: 7,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)