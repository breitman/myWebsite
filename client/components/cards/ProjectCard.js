import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
class ProjectCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHover: false
    }
    this.onHover = this.onHover.bind(this)
  }

  onHover() {
    if (this.state.isHover === true) {
      this.setState({isHover: false})
    }
    if (this.state.isHover === false) {
      this.setState({isHover: true})
    }
  }

  render() {
    const project = this.props.project
    return (
      <div
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
        className="pb-4"
      >
        <a className="project-link" href={project.href} target="_blank">
          <Card
            bg={this.state.isHover ? 'light' : 'secondary'}
            text={this.state.isHover ? 'secondary' : 'light'}
            style={{width: '350px', height: '300px'}}
          >
            <Card.Header as="h5">{project.name}</Card.Header>
            <Card.Body>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    )
  }
}

/* <img
  width={100}
  height={100}
  className="mr-3"
  src={project.imageURl}
  alt="Generic placeholder"
/> */

export default ProjectCard
