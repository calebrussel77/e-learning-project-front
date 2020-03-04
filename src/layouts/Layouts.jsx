import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/footer/Footer';

const Layouts = props => {
  return (
    <React.Fragment>
      <Navigation />
      {props.children}

      <div className="mt-48 w-full">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layouts;
