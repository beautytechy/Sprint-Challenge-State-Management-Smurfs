import React, {useContext} from 'react';
import {VillageContext} from "../contexts/CartContext";

const Village =  () => {
	const village = useContext(VillageContext);
	

	return (
		<div>
				{smurfs.map(item => {
                    return (
                      <SmurfCard
                        key={item.id}
                        name={item.name}
                        age={item.age}
                        height={item.height}
                      />
                    )
                  })
                  }
          
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};