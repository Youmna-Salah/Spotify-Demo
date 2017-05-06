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
			artist: [],
			currentIndex: null
		}
	}
	componentDidMount(){
		axios.get(`${APIURL}/search?type=artist&q=Amr`).then(response => {
			this.setState({artistList: response.data.artists.items});
		});
	}

	render(){
		return(
			<div className="artists-list-container">
				<h1 className="title">Top Artists</h1>
				<div className="medium-12 columns artists">
					<ArtistList currentIndex={this.state.currentIndex} artists={this.state.artistList}/>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
}