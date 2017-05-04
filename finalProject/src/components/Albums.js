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
			SongsList: []
		}
	}
	componentDidMount(){
	const id = this.props.match.params.id;
	axios.get(`${APIURL}/albums/${id}/tracks?limit=1`).then(response => {
		   // console.log(response.data.items);
			this.setState({SongsList: response.data.items});
		});

	}

	render(){
	return(
	<div>
	<h1> Albums</h1>
	<SongsList songs={this.state.SongsList}  playTrack={this.props.playTrack}/>
	</div>
	);
	}
}