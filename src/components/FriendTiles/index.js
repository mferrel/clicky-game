import React from "react";
import "./style.css";

var FriendTiles = props => (
	<div 
	className="tiles " 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
);


export default FriendTiles;