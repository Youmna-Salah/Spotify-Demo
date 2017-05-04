import React from 'react';
import axios from 'axios';

import ArtistList from './ArtistList';
/* API information */
import {APIURL} from "../App";

/******************/


export default class ArtistsSearch extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			artistList: []
			}

		this.searchVideos = this.searchVideos.bind(this);

	}

	searchVideos(event){
		event.preventDefault();
		let keyword = this.refs.keyword.value;
		axios.get(`${APIURL}/search?type=artist&q=${keyword}`).then(response => {
			this.setState({artistList: response.data.artists.items});
		});
	}

	render(){
		return(
				<div className="artists-list-container">
			    <form className="search" onSubmit={this.searchVideos}>
				<input className="searchbar" ref="keyword" type="text"/>
				</form>

				<h1 className="title">Searched For</h1>
				<div className="medium-12 columns artists">
					<ArtistList artists={this.state.artistList}/>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}


