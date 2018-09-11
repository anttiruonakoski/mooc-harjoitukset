import React from 'react';

const LisaaHenkilo = ({ handlechange, filter }) => {
	return (
		<div>
			rajaa näytettäviä: <input type="text"
			onChange={handlechange('filter')} value={filter}/>
		</div>
	)
}

export default LisaaHenkilo