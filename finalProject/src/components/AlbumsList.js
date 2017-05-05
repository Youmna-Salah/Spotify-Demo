import React from 'react';
import {Link} from 'react-router-dom'
export default function AlbumsList (props){
	//console.log("ALBUMSSSSSSSSSSSS");
	//console.log(props);
	if(props.albums !== undefined){
		console.log("INNNER undefined");
	// return(
	// 	<div className="row" key="100">
	// 	<ul key="200">
	// 	{props.albums.map((album, i) => { 
	// 		return <li key={i} className="medium-3 columns">
	// 			<Link to={`/albums/${album.artists[0].id}`}>{album.name}</Link>
	// 		</li>
	// 	}
	// 		)}
	// 	</ul>
	//   </div>
	// 	);
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
	// 	console.log(props.albums);
	// 	return(
	// 		<div className="row" key="100">
	// 		<ul key="200">
	// 		{props.albums.map((album, i) => { 
	// 			return <li key={i} className="medium-3 columns">
	// 				<Link to={`/albums/${album.id}`}>{album.name}</Link>
	// 			</li>
	// 		}
	// 			)}
	// 		</ul>
	// 	  </div>
	// 		);}
	// else
	// 	return(
	// 		<div className="row" key="100">
	// 	  </div>
	// 		);
}  


