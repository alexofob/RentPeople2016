import React from 'react';
import Header from '/imports/ui/components/header.jsx';
import Footer from '/imports/ui/components/footer.jsx';

const MainLayout = ({ children }) => (
  <div>
    <Header />

    <div className="flex-container">
      {children}
    </div>

    <Footer />
  </div>
);

export default MainLayout;
