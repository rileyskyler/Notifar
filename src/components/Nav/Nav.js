import React from "react";
import { connect } from "react-redux";
import './nav.css';

export default function Nav() {
	return (
		<div className="nav">
			<div>
                <ul>
                    <li>Noti·far</li>
                    <li>Login</li>
                    <li>Activate</li>
                </ul>
            </div>
		</div>
	);
}

// function mapStateToProps( { products, productsInCart } ) {
// 	return {
// 		cartTotal: products
// 			.filter( product => productsInCart.includes( product.id ) )
// 			.reduce( ( total, { price } ) => total + price, 0 )
// 			.toFixed( 2 )
// 	};
// }

// export default connect( Nav );