import React from 'react';
import axios from 'axios';
import '../index.css'
import AlbumsList from './AlbumsList';

/* API information */
import {APIURL} from "../App";

/******************/


export default class AlbumsSearch extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			albumsList: []
			}

		this.searchVideos = this.searchVideos.bind(this);

	}

	searchVideos(event){
		event.preventDefault();
		let keyword = this.refs.keyword.value;
		axios.get(`${APIURL}/search?type=album&q=${keyword}`).then(response => {
			console.log("AlbumsSearch: ");
			console.log(response);
			this.setState({albumstList: response.data.albums.items});
		});
	}

	render(){
		return(
			<div className="artists-list-container">
				<h1 className="title">Search for albums</h1>
				<form className="searchbar" onSubmit={this.searchVideos}>
					<input className="search" ref="keyword" type="text" placeholder="Search..."/>
				</form>
				<div className="medium-12 columns artists">
					<AlbumsList albums={this.state.albumstList}/>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}


