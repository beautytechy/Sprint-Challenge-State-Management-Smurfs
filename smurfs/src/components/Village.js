import React, {useContext} from 'react';
import {VillageContext} from "../contexts/VillageContext";
import Smurf from "./Smurf";
const Village =  () => {

	const house = useContext(VillageContext);
	
	return (
		<div>
				{house.map(item => {
                    return (
                      <Smurf
                        key={item.id}
                        name={item.name}
                        age={item.age}
                        height={item.height}
                      />
                    )
                  })
                  }
			))}
			</div>
	);
};

export default Village;
