import React from 'react';
import ReactPlayer from 'react-player';
import FontAwesome from 'react-fontawesome';

export default class Player extends React.Component{
		constructor(props) {
		super(props);
		this.state= {
			play:true,
			width: 0,
			played: 0 
		}
		this.onProgress = this.onProgress.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
	}
	togglePlay(){
			this.setState({play: !this.state.play});
			this.setState({width: 0});
			this.setState({played: 0});
		}
	componentWillReceiveProps(nextProps) {
		if (this.props.current == undefined || (nextProps.current.id !== this.props.current.id)) {
			this.setState({play: true});
		}
	}
	onProgress(played){
		console.log("PLAYED");
		console.log(played);
	    this.setState({width: played.played*100});
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
					<a>{this.state.play?
						<i className="fa fa-pause fa-2x play-icon" onClick={this.togglePlay} aria-hidden="true"></i>:
						<i className="fa fa-play fa-2x play-icon" onClick={this.togglePlay} aria-hidden="true"></i>
					}</a>
					<ReactPlayer url={this.props.current.preview_url} playing={this.state.play} onProgress={this.onProgress} hidden/>
			     	<div className="stream-bar row">
			     		<p className="small-1 columns duration">{this.state.width.played?Math.round(this.state.width.played*30):0}</p>
			     		<div className="stream-column">
					     	<div className=" columns stream" style={{padding: 0+"px"}}>
					     		<div className="streamed-so-far" style={{width:this.state.width +"%"}}></div>
					     	</div>
				     	</div>
				     	<p className="small-1 columns duration">30</p>
			     	</div>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
} 