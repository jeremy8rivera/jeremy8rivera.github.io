import React from 'react';
import './../../assets/css/footer.css'
import './../../assets/css/common.css'
import commonData from './../../data/links.json'

function Footer() {
  return (
    <div className="footer">
    <div className="row">
    <div className="column">
    	<h3>Connect</h3>
    	<ul>
    		<li><a href={commonData.facebook}>Facebook</a></li>
    		<li><a href={commonData.instagram}>Instagram</a></li>
    		<li><a href={commonData.linkedin}>LinkedIn</a></li>
    		<li><a href={commonData.github}>Github</a></li>
    	</ul>
    </div>
    <div className="column text-align-right">
    	<h3>Contact</h3>
    	<ul>
    		<li>Jeremy Rivera</li>
    		<li>Greenwich, CT</li>
    		<li><a href="mailto: jeremy8rivera@gmail.com">jeremy8rivera@gmail.com</a></li>
    		<li><a href="tel:+1203-252-9970">+1-(203)-252-9970</a></li>
    	</ul>
    </div>
    </div>
    </div>
  );
}

export default Footer;