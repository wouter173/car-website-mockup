import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Stat(props) {
	return (
		<div className="stat">
			<FontAwesomeIcon icon={props.icon} />
			<h3>{props.title}</h3>
			<span>{props.description}</span>
		</div>
	)
}
