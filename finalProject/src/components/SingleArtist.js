import React from 'react';
import axios from 'axios';
import SongsList from './SongsList';
import {APIURL} from "../App";
export default class SingleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			artist: {},
			tracks: []
		}
		console.log(this);
	}
	componentDidMount(){
		const id = this.props.match.params.id;
		axios.get(`${APIURL}/artists/${id}`).then(
			(response)=>{
				console.log(response.data);
				this.setState({artist: response.data});
			})
		this.getTopTracks();
	}
	getTopTracks(){
		const id = this.props.match.params.id;
		axios.get(`${APIURL}/artists/${id}/top-tracks?country=SE`).then(
			(response)=>{
				console.log(response.data);
				this.setState({tracks: response.data.tracks});
			})
	}
	render(){
		console.log(this.state.artist);
		return(
			<div>
			<h1> Artist</h1>
			<br/>
			<h5>{this.state.artist.name}</h5>
			<SongsList songs={this.state.tracks} playTrack={this.props.playTrack}/>
			</div>
			);
	}
}