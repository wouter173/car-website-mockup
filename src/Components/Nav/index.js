import React, { Component } from 'react'
import { Link } from 'react-scroll'

import './main.scss';


export default class index extends Component {
	constructor() {
		super();

		this.state = {
			solid: false,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", () => {this.setState({ solid: window.scrollY > 60 })});
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		window.removeEventListener("scroll");
	}

	render() {
		let offset = 400
		return (
      <div>
        <nav className={this.state.solid ? 'solid' : ''}>
          <div className="logo dark"></div>
          <div className="links dark">
						<Link to="Performance" smooth offset={offset}>Performance</Link>
						<Link to="Quality" smooth offset={offset}>Quality</Link>
						<Link to="Charging" smooth offset={offset}>Charging</Link>
						<Link to="Autopilot" smooth offset={offset}>Autopilot</Link>
          </div>
        </nav>
      </div>
    );
	}
}
