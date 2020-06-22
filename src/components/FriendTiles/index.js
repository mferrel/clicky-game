import React from "react";
import "./style.css";

var FriendTiles = props => (
	<div
		className="tiles"
		key={props.id}
		onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img className="tilesimg"
			id={props.name}
			src={process.env.PUBLIC_URL + props.image}
			alt={props.name}
		/>
	</div>
);


export default FriendTiles;