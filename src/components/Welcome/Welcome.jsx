import React from 'react';
import './Welcome.scss';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Components
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Welcome = () => (
  <div className="welcome">
    <Logo className="welcome-logo" />
    <h3 className="welcome-text">
      Edit <code>src/components/Welcome/Welcome.jsx</code> and save to reload.
    </h3>
    <a className="welcome-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <h4>
        Learn React &nbsp; <FontAwesomeIcon icon={solid('arrow-right')} className="welcome-link-icon" />
      </h4>
    </a>
    <a className="welcome-link" href="https://github.com/jarntz/react" target="_blank" rel="noopener noreferrer">
      <h4>
        GitHub &nbsp; <FontAwesomeIcon icon={brands('github')} className="welcome-link-icon" />
      </h4>
    </a>
  </div>
);

export default Welcome;
