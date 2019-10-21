import React, {Component} from 'react'
import Typed from 'typed.js'
import ProjectsPage from './ProjectsPage'
import {Link, withRouter} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import AboutMePage from './AboutMePage'

class HomePage extends Component {
  constructor() {
    super()

    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var options = {
      strings: [
        'I am Ben Reitman',
        'I am a programmer',
        'I am a student',
        'I am a traveler',
        'I am a gamer',
        'I am an athlete'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 800,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    }
    this.typed = new Typed(this.el, options)
  }
  render() {
    return (
      <div id="home">
        <header className="home">
          <br />
          <h1
            className="typer"
            style={{
              whiteSpace: 'pre',
              textAlign: 'center',
              color: 'white',
              verticalAlign: 'middle'
            }}
            ref={el => {
              this.el = el
            }}
          />
          <div style={{textAlign: 'center'}}>
            <a
              className="icon"
              href="https://github.com/breitman"
              target="_blank"
              style={{textAlign: 'center'}}
            >
              <FontAwesomeIcon
                style={{color: 'white'}}
                icon={['fab', 'github']}
                size="5x"
              />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/benjamin-reitman-769b21161/"
              target="_blank"
            >
              <FontAwesomeIcon
                style={{color: 'white'}}
                icon={['fab', 'linkedin']}
                size="5x"
                transform="right-1"
              />
            </a>
            <a
              className="icon"
              href="./Ben Reitman-Resume.pdf"
              target="_blank"
              download
            >
              <FontAwesomeIcon
                style={{color: 'white'}}
                icon="file-alt"
                size="5x"
                transform="right-3"
              />
            </a>
          </div>
        </header>
      </div>
    )
  }
}

export default HomePage
