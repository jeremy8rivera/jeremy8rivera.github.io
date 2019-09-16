import React, { Component } from 'react';
import './../../assets/css/navbar.css'

class Navbar extends Component {
	componentDidMount(){
		window.addEventListener('scroll', this.listenToScroll)
	}

	listenToScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const bodyTop = document.body.getBoundingClientRect().top;
		const snapshot = document.getElementById('snapshot');
		const snapshotBottom = snapshot.getBoundingClientRect().bottom - bodyTop - snapshot.scrollHeight/2;
		const about = document.getElementById('about')
		const aboutBottom = about.getBoundingClientRect().bottom - bodyTop - about.scrollHeight/2;
		const education = document.getElementById('education')
		const educationBottom = education.getBoundingClientRect().bottom - bodyTop - education.scrollHeight/2;
		const skills = document.getElementById('skills')
		const skillsBottom = skills.getBoundingClientRect().bottom - bodyTop - skills.scrollHeight/2 ;

		const snapshotNav = document.getElementById('nav-snapshot')
		const aboutNav = document.getElementById('nav-about')
		const educationNav = document.getElementById('nav-education')
		const skillsNav = document.getElementById('nav-skills')
		const projectsNav = document.getElementById('nav-projects')

		if(winScroll >= 0 && winScroll < snapshotBottom){
			snapshotNav.className ="focused"
			aboutNav.className = "unfocused"
			educationNav.className = "unfocused"
			skillsNav.className = "unfocused"
			projectsNav.className = "unfocused"
		}

		else if(winScroll >= snapshotBottom && winScroll < aboutBottom){
			snapshotNav.className ="unfocused"
			aboutNav.className = "focused"
			educationNav.className = "unfocused"
			skillsNav.className = "unfocused"
			projectsNav.className = "unfocused"
		}
		else if(winScroll >= aboutBottom && winScroll < educationBottom){
			snapshotNav.className ="unfocused"
			aboutNav.className = "unfocused"
			educationNav.className = "focused"
			skillsNav.className = "unfocused"
			projectsNav.className = "unfocused"
		}
		else if(winScroll >= educationBottom && winScroll < skillsBottom){
			snapshotNav.className ="unfocused"
			aboutNav.className = "unfocused"
			educationNav.className = "unfocused"
			skillsNav.className = "focused"
			projectsNav.className = "unfocused"
		}
		else if(winScroll >= skillsBottom){
			snapshotNav.className ="unfocused"
			aboutNav.className = "unfocused"
			educationNav.className = "unfocused"
			skillsNav.className = "unfocused"
			projectsNav.className = "focused"
		}
}

	render(){
		return (
			<div className="navbar">
			<ul>
			<li id="nav-snapshot"><a className="unfocused" href="#snapshot">Snapshot</a></li>
			<li id="nav-about"><a className="unfocused" href="#about">About</a></li>
			<li id="nav-education"><a className="unfocused" href="#education">Education</a></li>
			<li id="nav-skills"><a className="unfocused" href="#skills">Skills</a></li>
			<li id="nav-projects"><a className="unfocused" href="#projects">Projects</a></li>
			</ul>
			</div>
			);
	}
}

export default Navbar;