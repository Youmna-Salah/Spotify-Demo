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
		console.log(this.props.current);
		return(
			<div className="player">
				<div className="small-3 columns">
					<div className="player-image small-2 columns" 
						style={{backgroundImage: 
							"url("+(this.props.current.album.images?
								this.props.current.album.images[1].url:"")
							+")"
						}}>
					</div>
					<div className=" artist-details large-8 columns">
						<p>{this.props.current.name}</p>
						<br/>
						<p>{artist}</p>
					</div>
					<div className="clear"></div>
				</div>
				<div className="player-stream large-7 columns">
					<button onClick={this.togglePlay}>play</button>
			     	<ReactPlayer url={this.props.current.preview_url} playing={this.state.play} hidden/>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
} 