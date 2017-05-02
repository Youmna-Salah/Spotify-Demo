import React from 'react';
import {Link} from 'react-router-dom'
export default function AlbumsList (props){
	console.log("ALBUMSSSSSSSSSSSS");
	console.log(props);
	return(
		<div className="row" key="100">
		<ul key="200">
		{props.albums.map((album, i) => { 
			return <li key={i} className="medium-3 columns">
				<Link to={`/albums/${album.artists[0].id}`}>{album.name}</Link>
			</li>
		}
			)}
		</ul>
	  </div>
		);
}  

