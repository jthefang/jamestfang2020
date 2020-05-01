import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: "https://www.facebook.com/james.fang.12/", icon: faFacebook },
  { href: "https://www.linkedin.com/in/james-fang-854049126/", icon: faLinkedin },
  { href: "https://twitter.com/jtotheamesfang", icon: faTwitter },
  { href: "mailto:jtotheamesfang@gmail.com", icon: faEnvelope },
  { href: "https://github.com/jthefang", icon: faGithub },
]

export default class Social extends Component {
  render() {
    return (
      <Col xs="12" className="social">
        {socialLinks.map((link, index) => 
          <a key={index} target="_blank" rel="noopener noreferrer" 
            href={link.href}><FontAwesomeIcon icon={link.icon} /></a>
        )}
      </Col>
    )
  }
}
