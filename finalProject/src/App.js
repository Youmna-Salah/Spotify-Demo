import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists';
import Player from './components/Player';

import SingleArtist from './components/SingleArtist'; 
/* API information */
export const APIURL="https://api.spotify.com/v1"; 

export default class App extends React.Component{
	constructor(props) {
		super(props);
		this.state= {
			queue:[],
			currentIndex:null
		}
		this.playTrack = this.playTrack.bind(this);
	}

	playTrack(tracks, index){
		this.setState({queue: tracks, currentIndex:index});
	}
	nextTrack(){
		if(this.state.currentIndex !== this.state.queue.length-1){
			this.setState({currentIndex: this.state.currentIndex+1});
		}

	}
	render(){
		return(
			<BrowserRouter>
			<div>
			<Menu />
			<Route exact path="/" component={Home}/>
			<Route path="/artists" component={Artists}/>
			<Route path="/artist/:id"
			 render={(routeParams)=> <SingleArtist {...routeParams}  playTrack={this.playTrack}/>}
			  />
			<Player current={this.state.queue[this.state.currentIndex]}/>

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
		<li><Link to="/artists">Artists</Link></li>

		</ul>);
}



