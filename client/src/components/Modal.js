import React, { Component } from 'react';
import ReactDOM from 'react-dom';



// require('./client/public/assets/img');

class Modal extends Component {
	constructor() {
		super();

		this.state = {
			start: false,
			current_image: 1,
			mood: '',
			ok_images: [
				'https://picsum.photos/300/300?image=16',
				'https://picsum.photos/300/300?image=81',
				'https://picsum.photos/300/300?image=82'
			],
			neutral_images: [
				'https://picsum.photos/200/300?image=103',
				'https://picsum.photos/200/300?image=106',
				'https://picsum.photos/200/300?image=110'
			],
			anxious_images: [
				'https://picsum.photos/300/300?image=16',
				'https://picsum.photos/300/300?image=17',
				'https://picsum.photos/300/300?image=18',
				'https://picsum.photos/300/300?image=53',
				'https://picsum.photos/200/300?image=55',
				'https://picsum.photos/200/300?image=57',
				'https://picsum.photos/200/300?image=58',
				'https://picsum.photos/200/300?image=76',
				'https://picsum.photos/200/300?image=77',
				'https://picsum.photos/200/300?image=79'

			]
		}
	}

	startRelaxation(mood) {
		this.setState({
			start: true,
			mood: mood
		});
	}

	nextImage() {
		let end = this.state.current_image === this.state[this.state.mood].length - 1;
		let current = end ? 0 : this.state.current_image + 1;

		this.setState({
			current_image: current
		});
	}


	render() {
		return(
			<div className="modal column y-center">
				<h3>How are you doing?</h3>
				{!this.state.start ? (
					<div className="choices">
						<button onClick={() => this.startRelaxation('ok_images')}>Ok</button>
						<button onClick={() => this.startRelaxation('neutral_images')}>Neutral</button>
						<button onClick={() => this.startRelaxation('anxious_images')}>Anxious</button>
					</div>
				) : (
					<div className="column y-center">
						<div className="image">
							<img src={this.state[this.state.mood][this.state.current_image]}/>
						</div>
						<button onClick={this.nextImage.bind(this)}>Next Image</button>
					</div>
				)}
				<button onClick={this.props.closeModal}>Close</button>
			</div>
		)
	}
}

export default Modal;
