import React from 'react';
import {Link} from 'react-router-dom'
export default function ArtistList (props){
	console.log(props);
	return(<div className="row" key="100">
		<ul key="200">
		{props.artists.map((artist, i) => { 
			const image = artist.images.length? artist.images[0].url:"";
		    return<li key={i} className="medium-3 columns">
			<Link to={`/artist/${artist.id}`}>{artist.name}</Link>
			<img id="img"  key={i+artist.id} src={image} alt={"Mountain View"} />
			</li>
		})}			
		</ul>
		</div>
		)
}  


