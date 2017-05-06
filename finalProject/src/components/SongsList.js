import React from 'react';
var selected = -1;
export default function SongsList (props){
	//console.log("SONGS LISTS");
	const currentIndex = props.currentIndex;
	// console.log("CURRENNNTT");
	// console.log(currentIndex);
	// if(props.songs[0])
	// console.log(props.songs[0].duration_ms);
	return(<div className="row" key="100" style={{margin: "1%"}}>
		<ul key="200">
		{props.songs.map((song, i) => { 
			return <li key={i} className={`song ${currentIndex == i? "active" : ""}`} onClick={()=>{props.playTrack(props.songs, i);}}>
				<p style={{ padding: "10px",opacity:0.5}}>{i+1}. </p>
				<a style={{ paddingLeft: "90px"}}>{song.name}</a>
				<a style={{ paddingLeft: "90px",opacity:0.5, float: "right",marginRight: "20%"}}>{song.duration_ms}</a>
			</li>
		}
			)}
		</ul>
		</div>
		);
}  



