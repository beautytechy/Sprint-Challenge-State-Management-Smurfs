import React from 'react';
import VillageContext from "../contexts/VillageContext";


const Smurf = ({props}) => {
	return (
		<div className="smurf">

			<h1>{props.smurfData.name}</h1>
			<p>{props.smurfData.age}</p>
			<p>{props.smurfData.height}</p>

		</div>
	);
};

export default Smurf;

