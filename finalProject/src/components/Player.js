import React from 'react';
import ReactPlayer from 'react-player';
export default class Player extends React.Component{
		constructor(props) {
		super(props);
		this.state= {
			play:true,
			width: 0,
			played: 0 
		}
		this.togglePlay = this.togglePlay.bind(this);
		this.onProgress = this.onProgress.bind(this);
	}
	togglePlay(){
			this.setState({play: !this.state.play});
			this.setState({width: 0});
			this.setState({played: 0});
		}
	onProgress(played){
		console.log(played);
	    this.setState({width: played});
	    this.setState({played: this.state.played+1});
	}
	render(){
		if(!this.props.current){
			return null
		}
		if(!this.props.current.preview_url){
			alert("ERRROR");
		}
		const artist = this.props.current.artists[0].name;
		// console.log(this.props);
		return(
			<div className="player">
				<div className="small-3 columns">
					<div className="player-image small-2 columns" 
						style={{backgroundImage: 
							"url("+(this.props.current.album?
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
				<div className="player-stream large-6 columns">
					<button className="play-icon" onClick={this.togglePlay}>{this.state.play?"Pause":"Play"}</button>
					<ReactPlayer url={this.props.current.preview_url} playing={this.state.play} onProgress={this.onProgress} hidden/>
			     	<div className="stream-bar row">
			     		
			     		<div className="stream-column">
					     	<div className=" columns stream" style={{padding: 0+"px"}}>
					     		<div className="streamed-so-far" style={{width: (this.state.width.played)*100 +"%"}}></div>
					     	</div>
				     	</div>
				     	<p className="small-1 columns duration">{this.state.width.played?Math.round(this.state.width.played*30):0}</p>
				     	<p className="small-1 columns duration">30</p>
			     	</div>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
} 