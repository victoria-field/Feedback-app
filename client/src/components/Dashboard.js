import React from 'react';
import Modal from './Modal';

const Dashboard = props => (
	<div>
		{props.show_modal ? (
			<Modal closeModal={props.closeModal.bind(this)} />
		) : ''}

		<button onClick={props.showModal.bind(this)}>Show Modal</button>
	</div>
);

export default Dashboard;
