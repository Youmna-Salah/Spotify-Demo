import React from 'react';
import {APIURL} from "../App";
import axios from 'axios';
import SongsList from './SongsList';
import '../index.css'
import '../foundation/foundation-6.3.0-complete/css/foundation.css';
export default class Albums extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			album: {},
			SongsList: [],
			images:[],
			name:""
		}
	}
	componentDidMount(){
		const id = this.props.match.params.id;
		// axios.get(`${APIURL}/albums/${id}/tracks?`).then(response => {
		// 	   console.log(response.data.items);
		// 		this.setState({SongsList: response.data.items});
		// });

		axios.get(`${APIURL}/albums/${id}`).then(response => {
				console.log('IMAGES: ');
			   	console.log(response.data);
			   	this.setState({album: response.data});
				this.setState({images: response.data.images});
				this.setState({SongsList: response.data.tracks.items});
				this.setState({name: response.data.name});
		});
	}

	render(){
		console.log("STATE: " + this.state.images);
		return(
			<div className="single-album ">
				<div className="row">
					<div className="single-album-det large-3 columns">
						<div className="single-album-pic" 	
							style={{backgroundImage: "url("+(this.state.images[0]? this.state.images[0].url:"")+")"}}>
						</div>
						<h3 className="album-artist-album-name">{this.state.name}</h3>
						<br/>
						<h4 className="album-artist-name">{this.state.album.artists?this.state.album.artists[0].name:""} </h4>
						<br/>
						<h4 className="album-artist-tracks">{this.state.SongsList?this.state.SongsList.length+" tracks":""}</h4>
						<br/>
						<a href="#" className="button-follow button-1">Artist profile</a>
					</div>
					<div className="single-album-tracks large-7 columns">
						<SongsList songs={this.state.SongsList}  playTrack={this.props.playTrack}/>
					</div>
				</div>
				
				
			</div>
		);
	}
}