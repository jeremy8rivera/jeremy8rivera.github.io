import React, { Component } from 'react';
import ProjectData from './../../data/project-data.js';


class Projects extends Component {

	state = {
		projects: ProjectData
	}

	buildContent(){
		const Content = this.state.projects.map((project, index) =>
			<div key={project.key} className="project-card">
			<h3 className="project-name">{project.name}</h3>
			<p className="project-description">{project.description}</p>
			<p className="project-languages">Language(s): {project.languages}</p>
			{project.link.map(link => <div className="project-link"><a href={link.endpoint}>View {link.type}</a></div>)}
			</div>
		)

		return Content;
	}

	render(){
		return(
			<div className="card-row">
			{this.buildContent()}
			</div>
			)
		}
}

export default Projects;