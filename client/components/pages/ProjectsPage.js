import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchProjects} from '../../store/project'
import ProjectCard from '../cards/ProjectCard'

class ProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const {projects} = this.props
    return (
      <div className="projects" id="projects">
        <h1 className="project-title">Projects</h1>
        <div>
          <ul className="cards">
            {projects && projects.map(project => (
              <ProjectCard
                className="card"
                project={project}
                key={project.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage)
