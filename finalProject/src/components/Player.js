import React from 'react';
import ReactPlayer from 'react-player';
export default class Player extends React.Component{
		constructor(props) {
		super(props);
		this.state= {
			play:true
		}
				this.togglePlay = this.togglePlay.bind(this);

	}
togglePlay(){
		this.setState({play: !this.state.play});
	}
render(){
	if(!this.props.current){
		return null
	}
	if(!this.props.current.preview_url){
		alert("ERRROR");
	}
const artist = this.props.current.artists[0].name;
	return(
		<div className="player">
		<div>
		<h5>Artist name</h5>
		<br/>
		<p>Track name</p>
		</div>
		<div>
		<h5>{this.props.current.name}</h5>
		<p>{artist}</p>
		</div>
		<button onClick={this.togglePlay}>play</button>
		       <ReactPlayer url={this.props.current.preview_url}
		       playing={this.state.play} hidden/>
		       </div>);
}
} 