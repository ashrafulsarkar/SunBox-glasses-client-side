import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login/Login";
import Register from "./components/Pages/Register/Register";
import PrivateRoute from "./components/Pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/Pages/NotFound/NotFound";
import Footer from "./components/Sections/Footer/Footer";
import Header from "./components/Sections/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import Thankyou from "./components/Pages/Thankyou/Thankyou";

function App() {
  return (
    <AuthProvider>
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
				<Route path="/product">
					<ProductPage></ProductPage>
				</Route>
				<PrivateRoute path="/dashboard">
					<Dashboard></Dashboard>
				</PrivateRoute>
				<PrivateRoute path="/checkout/:id">
					<CheckOut></CheckOut>
				</PrivateRoute>
				<PrivateRoute path="/thankyou">
					<Thankyou></Thankyou>
				</PrivateRoute>
				<Route path="/login">
					<Login></Login>
				</Route>
				<Route path="/register">
					<Register></Register>
				</Route>
				<Route path="*">
					<NotFound></NotFound>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	</AuthProvider>
  );
}

export default App;
