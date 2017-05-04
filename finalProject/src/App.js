import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Artists from './components/Artists';
import Albums from './components/Albums';
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
				<div className="page row">
					<Menu />
					<Route exact path="/" component={Artists}></Route>
					<Route path="/artists" component={Artists}></Route>
					<Route path="/albums/:id" render={(routeParams)=> <Albums {...routeParams}  playTrack={this.playTrack}/>}/>
					<Route path="/artist/:id"
					 render={(routeParams)=> <SingleArtist {...routeParams}  playTrack={this.playTrack}/>}/>
					<Player current={this.state.queue[this.state.currentIndex]}/>
				</div>
			</BrowserRouter>
			)
	}
}

function Menu(props){
	return(
		<div className="menu columns">
				<div className="spotify-logo"></div>
				<ul>
					<li><Link to="/artists">Home</Link></li>
					<li><Link to="/artist">Albums</Link></li>
					<li><Link to="/artists">Artists</Link></li>
				</ul>
				<p className="user-name">Ahmed Wagdi</p>
			
		</div>
		);
}


