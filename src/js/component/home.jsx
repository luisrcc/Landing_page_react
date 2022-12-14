import React from "react";
import Card from './cardComponent/Card';
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./footerComponent/Footer";

//include images into your bundle
/*import rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
const Home = () => {
	return (

		<>
			<Navbar />
			<Jumbotron />
			<div className='container my-2'>
				<div className='row'>
					<div className="col-12 col-md-3 col-sm-3">
						<Card />
					</div>
					<div className="col-12 col-md-3 col-sm-3">
						<Card />
					</div>
					<div className="col-12 col-md-3 col-sm-3">
						<Card />
					</div>
					<div className="col-12 col-md-3 col-sm-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>


	);
};

export default Home;
