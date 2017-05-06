import React from 'react';
import axios from 'axios';
import SongsList from './SongsList';
import AlbumsList from './AlbumsList';
import {APIURL} from "../App";
export default class SingleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			artist: {},
			tracks: [],
			albums:[]
		}
	}
	componentDidMount(){
		const id = this.props.match.params.id;
		this.setState({currentIndex: this.props.currentIndex});
		axios.get(`${APIURL}/artists/${id}`).then(
			(response)=>{
				this.setState({artist: response.data});
			});
		
		this.getTopTracks();
		this.getAlbums();
	}
	getTopTracks(){
		const id = this.props.match.params.id;
		
		axios.get(`${APIURL}/artists/${id}/top-tracks?country=SE`).then(
			(response)=>{
				this.setState({tracks: response.data.tracks});
			})
	}
	getAlbums(){
		const id = this.props.match.params.id;
		axios.get(`${APIURL}/artists/${id}/albums?market=SE`).then(
			(response)=>{
				this.setState({albums: response.data.items});
			})
	}

	render(){
		const followers = this.state.artist.followers? this.state.artist.followers.total:"0";
		const image = this.state.artist.images? this.state.artist.images[0].url:"";
		// console.log("CURRENT SINGLE");
		// console.log(this.props.currentIndex);
		return(
			<div className="artist-page columns">
				<div>	
					<div className="artist-profile-det" style={{backgroundImage: "url("+image+")"}}>
							<div className="image-info">
							<p  className="followers"> {followers} followers </p>
							<h1 style = {{marginBottom: "1.5%"}} className="followers artist-name artist-name-single">{this.state.artist.name}</h1>
							<a href="#" className="button-follow button-1">Follow</a>
							<a href="#" className="button-follow button--transparent">Play All</a>		
							</div>
					</div>	
					
					<div style={{backgroundColor: "rgb(26, 23, 23)"}}>
						<h2 className="artist-name" style={{margin: "2%"}}>Top Tracks</h2>
						<SongsList songs={this.state.tracks} currentIndex={this.props.currentIndex} playTrack={this.props.playTrack}/>
					</div>
				</div>
					<h3 className="artist-name" style = {{margin: "2%"}}>Albums</h3>
					<AlbumsList albums={this.state.albums} />
			</div>	
			);
	}
	

}