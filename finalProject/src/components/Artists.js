import React from 'react';
import {APIURL} from "../App";
import axios from 'axios';
import ArtistList from './ArtistList';
import '../index.css'
import '../foundation/foundation-6.3.0-complete/css/foundation.css';
export default class Artists extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			artistList: [],
			artist: []
		}
	}
	componentDidMount(){
		axios.get(`${APIURL}/search?type=artist&q=Amr`).then(response => {
			this.setState({artistList: response.data.artists.items});
		});
	}

	render(){
	return(
	<div>
	<h1> Artists</h1>
	<ArtistList artists={this.state.artistList}/>
	</div>
	);
	}
}