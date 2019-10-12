import React, {useContext} from 'react';
import {SmurfContext} from "/Users/nicolehollis/Sprint-Challenge-State-Management-Smurfs/smurfs/src/contexts/SmurfContext.js"; 
import Smurf from "./Smurf";

const Smurfs = () => {
	

const { smurfData, age, height, name } = useContext(SmurfContext);

	return (
		<div className="smurfs-container">
			{smurfData.map(item => (
				<Smurf
					key={item.id}
					name={name}
          			age={age}
          			height={height}
				/>
			))}
		</div>
	);
};

export default Smurfs;