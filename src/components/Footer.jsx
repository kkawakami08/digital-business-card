import React from 'react'
import githubIcon from '../assets/github-logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="icon-box">
        <a href="https://github.com/kkawakami08" target="_blank">
          <img src={githubIcon} alt="github logo" />
        </a>
      </div>
    </footer>
  )
}
