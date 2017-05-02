import React from 'react';
export default function SongsList (props){
	console.log("SONGS LISTS");
	console.log(props);
	return(<div className="row" key="100">
		<ul key="200">
		{props.songs.map((song, i) => { 
			return <li key={i} className="medium-3 columns">
				<a onClick={()=>props.playTrack(props.songs, i)}>{song.name}</a>
			</li>
		}
			)}
		</ul>
		</div>
		);
}  


