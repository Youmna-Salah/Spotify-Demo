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
			<div>
			<h1> Artist</h1>
			<br/>
			<h5>{this.state.artist.name}</h5>
			<SongsList songs={this.state.tracks} playTrack={this.props.playTrack}/>
			<br/>
			<br/>
			<h5>ALBUMS</h5>
			<AlbumsList albums={this.state.albums} />

			</div>
			);
	}
}