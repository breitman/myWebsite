import React, {Component} from 'react'
import Typed from 'typed.js'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class HomePage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    var options = {
      strings: [
        'I am Ben Reitman',
        'I am a programmer',
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
              href="/Users/breitman/Desktop/myWebsite/public/Ben_Reitman_Resume.pdf"
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
