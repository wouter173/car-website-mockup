/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './main.scss';

export default function index() {
	return (
    <footer>
      <div className="logo"></div>
      <ul>
        <li>
          <h4>Model A</h4>
          <a>Performance</a>
          <a>Quality</a>
          <a>Charging</a>
          <a>Autopilot</a>
        </li>
        <li>
          <h4>Company</h4>
          <a>Jobs</a>
          <a>News</a>
          <a>Locations</a>
          <a>Education</a>
        </li>
        <li>
          <h4>Website</h4>
          <a>Privacy</a>
          <a>Contact</a>
          <a>Letter</a>
          <a>Login</a>
        </li>
        <li>
          <h4>Design</h4>
          <a href="https://wouterdb.nl/">Designer</a>
          <a href="https://github.com/wouter173/car-website-mockup">github</a>
        </li>
      </ul>
    </footer>
  );
}
