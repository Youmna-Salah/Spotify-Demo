import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';


/* API information */
export const APIURL="https://api.spotify.com/v1"; 

/******************/


export default class App extends React.Component{
	constructor(props) {
		super(props);
	}


	render(){
		return(
			<BrowserRouter>
			<div>
			<Menu />
			<Route exact path="/" component={Home}/>
			<Route path="/artist" component={Artist}/>
			</div>
			</BrowserRouter>
			)
	}
}

function Menu(props){
	return(
	<ul>
	<li><Link to="/">Home</Link></li>
    <li><Link to="/artist">Artist</Link></li>
	</ul>);
}



