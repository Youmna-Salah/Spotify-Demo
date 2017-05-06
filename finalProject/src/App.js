import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Artists from './components/Artists';
import Albums from './components/Albums';
import ArtistsSearch from './components/ArtistsSearch';
import AlbumsSearch from './components/AlbumsSearch';
import Player from './components/Player';
import SingleArtist from './components/SingleArtist'; 
import FontAwesome from 'react-fontawesome';
import '../public/font-awesome-4.7.0/css/font-awesome.css'
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
		console.log(tracks[index]);
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
					<Route path="/albumsSearch" component={AlbumsSearch}></Route>
					<Route path="/artistsSearch" component={ArtistsSearch}></Route>
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
		<div className="menu medium-12 columns artists">
				<div className="spotify-logo"></div>
				<ul>
					<li><Link to="/artists">Home</Link></li>
					<li><Link to="/albumsSearch">Albums</Link></li>
					<li><Link to="/artistsSearch">Artists</Link></li>
				</ul>
					<a className="userName">
					<i className="fa fa-user-o user-name" aria-hidden="true">    Ahmed Wagdi</i>
					</a>
		</div>
		);
}


