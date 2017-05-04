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
		axios.get(`${APIURL}/artists/${id}`).then(
			(response)=>{
				this.setState({artist: response.data});
			})
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
		return(
			<div className="artist-page columns">
				<div>
					<div className="" 
						style={{
							backgroundImage: `url(this.state.artist.images? this.state.artist.images[0].url:""))`
						}}>
						<div className="artist-profile-det">
							<h1 className="artist-name artist-name-single">{this.state.artist.name}</h1>
						</div>
					</div>
				</div>
				
				<SongsList songs={this.state.tracks} playTrack={this.props.playTrack}/>
				<h3 className="artist-name">Albums</h3>
				<AlbumsList albums={this.state.albums} />
				</div>	
			);
	}
	

}