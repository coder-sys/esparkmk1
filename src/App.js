import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Information from './pages/Information';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import HomePage from './pages/HomePage';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import FolderContent from './pages/FolderContent';
function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar  />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/information" exact component={Information} />
				<Route path="/signup" exact component={SignUp} />
				<Route path='/login' exact component={LogIn} />
				<Route path='/homepage/:name/:ut' exact component={HomePage} />
				<Route path='/foldercontent/:uname/:foldername/:ut' exact component={FolderContent} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
const sn = createSwitchNavigator({
	LogIn:LogIn,
	HomePage:HomePage
})
const AppContainer = createAppContainer(sn)