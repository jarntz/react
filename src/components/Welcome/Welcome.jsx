import React from 'react';

// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Welcome = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center text-center text-dark">
    <div className="mb-6" data-aos="fade-up">
      <Logo className="pointer-events-none h-24 w-24	motion-safe:animate-spin" />
    </div>
    <h3 className="mb-6" data-aos="fade-up" data-aos-delay="100">
      Edit &zwnj;
      <code className="inline-block max-w-full whitespace-normal break-all">src/components/Welcome/Welcome.jsx</code>
      &zwnj; and save to reload.
    </h3>
    <a
      className="text-dark transition hover:text-black"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h4>
        Learn React &nbsp; <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="text-base" />
      </h4>
    </a>
    <a
      className="text-dark transition hover:text-black"
      href="https://github.com/jarntz/react"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h4>
        GitHub &nbsp; <FontAwesomeIcon icon="fa-brands fa-github" className="text-base" />
      </h4>
    </a>
  </div>
);

export default Welcome;
