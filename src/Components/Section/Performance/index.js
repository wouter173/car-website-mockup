import React from 'react'
import { faTachometerAlt, faCar, faRoad } from '@fortawesome/free-solid-svg-icons';

import Stat from '../Stat';

import '../main.scss';

export default function index(props) {
	return (
    <section id="Performance">
			<div className="column image" style={ { backgroundImage: `url("/images/performance.jpg")` }}></div>
			<div className="column">
				<div className="content">
					<div className="title">
						<h1>Performance</h1>
						<h2>Performance</h2>
					</div>
					<span className="description">
						Enjoy our AWD drive and efficient energy usage to go far, and fast.
					</span>
					<div className="stats">
						<Stat icon={faTachometerAlt} title="3s" description="0 to 100km/h."></Stat>
						<Stat icon={faCar} title="261km/h" description="Top speed."></Stat>
						<Stat icon={faRoad} title="610km" description="Max range."></Stat>
					</div>
				</div>
			</div>
    </section>
  );
}
