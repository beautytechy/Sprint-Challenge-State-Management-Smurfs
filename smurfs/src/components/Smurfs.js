import React, {useContext} from 'react';
import {SmurfContext} from "/Users/nicolehollis/Sprint-Challenge-State-Management-Smurfs/smurfs/src/contexts/SmurfContext.js"; 
import Smurfs from "/Users/nicolehollis/Sprint-Challenge-State-Management-Smurfs/smurfs/src/components/Smurfs.js";

const Smurfs = () => {

const { name, age, height } = useContext(SmurfContext);

	return (
		<div className="smurfs-container">
			{smurfs.map(product => (
				<Product
					key={product.id}
					name={name}
          age={age}
          height={height}
				/>
			))}
		</div>
	);
};

export default Smurfs;