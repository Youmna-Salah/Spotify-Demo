import React from 'react';
import {Link} from 'react-router-dom'
export default function AlbumsList (props){
	//console.log("ALBUMSSSSSSSSSSSS");
	//console.log(props);
	if(props.albums !== undefined){
	return(<div className="artists-list row" key="100">
		{props.albums.map((album, i) => { 
		    return(
			    <div key={i} className="medium-3 columns artist">
			    	<Link to={`/albums/${album.id}`}>
			    		<div className="artist-img-list" style={{width: "260px", backgroundImage: "url("+album.images[0].url+")"}}></div>
						<h6 className="artist-name">{album.name}</h6>
					</Link>
				</div>
			)
		})}			
 		</div>
		)
	}
	else
		return(
			<div className="row" key="100">
		  </div>
			);
}  


