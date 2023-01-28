import Navbar from "../Navbar/Navbar";
import Header from "../../Parts/Header";
import Body from "../../Component/Body/Cities";
import style from "./home.css"
import Cities from "../../Component/Body/Cities"
import Types from "../../Component/Body/HotelType"
import RegisterForm from "../../Component/Body/RegisterForm"
import Hotels from "../../Component/Body/Hotels"
import Footer from "../../Parts/Footer"
const Home = () => {
	return (
		<div>
			<Cities />
			<Types />
			<Hotels />
			
		</div>
	);
};

export default Home;
