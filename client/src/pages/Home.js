import React from 'react';

import Image1 from '../media/img/1.png';
import Image2 from '../media/img/2.png';
import Image3 from '../media/img/3.png';
import { Link } from 'react-router-dom';
import { GPALink } from './styles';

export const Home = () => {
  return (
    <div>
      <GPALink>
        <Link to={'/gpa-calculator'}>GPA Calculator</Link>
      </GPALink>
      <GPALink>
        <Link to={'/delivery'}>Delivery</Link>
      </GPALink>
      <div className="quote">
        <div className="quote__container container">
          <h1>SAVE UP YOUR TIME USING ALL NU SERVICES ON ONE WEBSITE</h1>
        </div>
      </div>
      <div className="features">
        <div className="features__container container">
          <div className="features__item">
            <div className="item-icon">
              <i className="fas fa-search fa-2x" />
            </div>
            <div className="item-name">
              Browse <br /> Courses
            </div>
          </div>
          <div className="features__item">
            <div className="item-icon">
              <img src={Image1} alt="" />
            </div>
            <div className="item-name">
              Practice <br /> Registration
            </div>
          </div>
          <div className="features__item">
            <div className="item-icon">
              <img src={Image2} alt="" />
            </div>
            <div className="item-name">
              Make your own <br /> Schedule
            </div>
          </div>
          <div className="features__item">
            <div className="item-icon">
              <img src={Image3} alt="" />
            </div>
            <div className="item-name">
              Plan <br /> Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
