import React from 'react';
import {Link} from 'react-router-dom'
export default function ArtistList (props){
	console.log(props);
	return(<div className="artists-list row" key="100">
		{props.artists.map((artist, i) => { 
			const image = artist.images.length? artist.images[0].url:"";
		    return(
			    <div key={i} className="large-3 columns artist">
			    	<div className="artist-img-list" style={{backgroundImage: "url("+image+")"}}></div>
					<Link to={`/artist/${artist.id}`}>{artist.name}</Link>
				</div>
			)
		})}			
 		</div>
		)
}  


