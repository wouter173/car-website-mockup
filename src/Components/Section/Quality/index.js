import React from 'react'
import { faCloudShowersHeavy, faCarBattery, faTruckMonster } from '@fortawesome/free-solid-svg-icons';

import Stat from '../Stat';

import '../main.scss';

export default function index() {
	return (
		<section id="Quality">
			<div className="column">
				<div className="content">
					<div className="title">
						<h1>Quality</h1>
						<h2>Quality</h2>
					</div>
					<span className="description">Your safety is guaranteed by our steel and aluminum construction and exact construction in our factory's.</span>
					<div className="stats">
						<Stat icon={faCarBattery} title="2 motors" description="To make sure you can drive." />
						<Stat icon={faTruckMonster} title="All wheel drive" description="You can go wherever you want whenever you want." />
						<Stat icon={faCloudShowersHeavy} title="Weather control" description="You can drive through the most rainy days" />
					</div>
				</div>
			</div>
			<div className="column image" style={{backgroundImage: 'url("/images/quality.jpg")'}}></div>
		</section>
	)
}
