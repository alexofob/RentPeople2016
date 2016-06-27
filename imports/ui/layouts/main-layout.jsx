import React, { PropTypes } from 'react';
import Header from '/imports/ui/containers/navbar/';
import Footer from '/imports/ui/components/footer.jsx';

const MainLayout = ({ children }) => (
  <div>
    <Header />

    <div className="flex-container">
      { children }
    </div>

    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
