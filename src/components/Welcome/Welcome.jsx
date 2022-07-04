import React from 'react';
import './Welcome.scss';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Components
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Welcome = () => (
  <div className="welcome">
    <div data-aos="fade-up">
      <Logo className="welcome-logo" />
    </div>
    <h3 className="welcome-text" data-aos="fade-up" data-aos-delay="100">
      Edit <code>src/components/Welcome/Welcome.jsx</code> and save to reload.
    </h3>
    <a
      className="welcome-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h4>
        Learn React &nbsp; <FontAwesomeIcon icon={solid('arrow-right')} className="welcome-link-icon" />
      </h4>
    </a>
    <a
      className="welcome-link"
      href="https://github.com/jarntz/react"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h4>
        GitHub &nbsp; <FontAwesomeIcon icon={brands('github')} className="welcome-link-icon" />
      </h4>
    </a>
  </div>
);

export default Welcome;
