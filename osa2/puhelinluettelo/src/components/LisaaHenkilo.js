import React from 'react';

const LisaaHenkilo = ({ addperson, handlechange, newname, newnumber }) => {
	return (
		<div>
			<form onSubmit={addperson}>
				<div>nimi:
					<input type="text"
					onChange={handlechange('newName')} value={newname}
					/>
				</div>
				<div>numero:
					<input type="text"
					onChange={handlechange('newNumber')} value={newnumber}
					/>
				</div>
        <div>
          <button type="submit">lisää</button>
        </div>
       </form>
		</div>
	)
}

export default LisaaHenkilo