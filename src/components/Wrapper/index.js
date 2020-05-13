import React, { Component } from 'react';
import FriendTiles from '../FriendTiles';
import friends from "../../friends.json";
import "./style.css";

class MainGameContainer extends Component {
	state = {
		friends,
		message: "Click a tile to begin",
		score: 0,
		topScore: 0
	};
	
	handleClick = (id, clicked) => {

		const imageOrder = this.state.friends;

		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You guessed incorrectly!",
				score: 0
			})
		}
		else {
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You guessed correctly!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
			<div className="message text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="scores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.friends.map(image => (
						<div className= "col-sm-3">
						<FriendTiles
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/></div>
					))}
					</div>
					
				</div>
			</div>
		);
	}
};

export default MainGameContainer;