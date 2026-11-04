
import { Routes, Route } from "react-router-dom";
import Login from "./componants/Login";
import Signup from "./componants/signupCopmonants/Signup";
import Client from "./componants/signupCopmonants/Client";
import Doctor from "./componants/signupCopmonants/Doctor";
import NotFound from "./componants/NotFound";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<div>Home</div>} />
			<Route path="/login" element={<Login/>} />
			<Route path="/signup" element={<Signup/>} />
			<Route path="/signup/doctor" element={<Doctor/>} />
			<Route path="/signup/client" element={<Client/>} />
			<Route path="*" element={<NotFound/>} />

		</Routes>
	);
};

export default App;
