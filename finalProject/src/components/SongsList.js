import React from 'react';
export default function SongsList (props){
	console.log("SONGS LISTS");
	
	if(props.songs[0])
	console.log(props.songs[0].duration_ms);
	return(<div className="row" key="100" style={{margin: "1%"}}>
		<ul key="200">
		{props.songs.map((song, i) => { 
			return <li key={i} className="">
				<p style={{ padding: "10px",opacity:0.5}}>{i+1}. </p>
				<a style={{ paddingLeft: "90px", color:"white"}} onClick={()=>{props.playTrack(props.songs, i)}}>{song.name}</a>
				<a style={{ paddingLeft: "90px", color:"white",opacity:0.5, float: "right",marginRight: "20%"}} onClick={()=>{props.playTrack(props.songs, i)}}>{song.duration_ms}</a>
			</li>
		}
			)}
		</ul>
		</div>
		);
}  


