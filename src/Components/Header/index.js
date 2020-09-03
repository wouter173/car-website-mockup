import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './main.scss'

export default function index() {
	return (
    <div id="Header">
      <div
        className="background"
        style={{ backgroundImage: `url("/images/thumbnail.jpg")` }}
      ></div>
      <div className="content">
        <h1>Model A</h1>
        <button>Order now!</button>
      </div>

      <div className="scroll">
        <div className="icon">
					<Link to="Performance" smooth offset={400}>
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </div>
      </div>
    </div>
  );
}
