import React from 'react'
import { faTrafficLight, faCircleNotch, faWifi} from '@fortawesome/free-solid-svg-icons';

import Stat from '../Stat'

export default function index() {
	return (
    <section id="Autopilot">
			<div className="column">
				<div className="content">
					<div className="title">
						<h1>AutoPilot</h1>
						<h2>AutoPilot</h2>
					</div>
					<span className="description">Let your car do the work.</span>
					<div className="stats">
						<Stat icon={faTrafficLight} title="AutoPilot" description="Your car steers, accelerates, and breaks. All by itself." />
						<Stat icon={faCircleNotch} title="360˚ view" description="Ensures yours and others' safety" />
						<Stat icon={faWifi} title="Call your car." description="Your car will drive to you all alone. All you have to do is call it." />
					</div>
        </div>
			</div>
			<div className="column image" style={{backgroundImage: 'url("/images/autopilot.jpg")'}}></div>
    </section>
  );
}
