import React from 'react'
import { faChargingStation, faHome, faMobile } from '@fortawesome/free-solid-svg-icons';

import Stat from '../Stat';

export default function index() {
	return (
		<section id="Charging">
			<div className="column image" style={{backgroundImage: 'url("images/charging.png")'}}></div>
      <div className="column">
        <div className="content">
          <div className="title">
            <h1>Charging</h1>
            <h2>Charging</h2>
          </div>
          <span className="description">
            Charge your Tesla using our charge stations.
          </span>
          <div className="stats">
            <Stat icon={faChargingStation} title="Charge anywhere." description="Charge at our designated car fast chargers." />
            <Stat icon={faHome} title="Charge at home" description="Charge at home using our car wallbox" />
            <Stat icon={faMobile} title="Know everything." description="See your car's battery status right in the car app."/>
          </div>
        </div>
			</div>
    </section>
  );
}
