import React, {Component} from 'react'
import AboutMePage from './AboutMePage'
import { HomePage, ProjectsPage } from '..'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <HomePage/>
        <AboutMePage/>
        <ProjectsPage/>
      </div>
    )
  }
}
