import React from "react";
import Card from './cardComponent/Card';


//create your first component
const Home = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className="col-3">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;
