import React from 'react';
import { Sticky } from 'react-sticky';

const Header: React.FC = () => {
  return (
    <Sticky>
      {({ style }) => (
        <header
          style={{ ...style, backgroundColor: '#706D54', zIndex: 1000 }}
          className="w-full h-16"
        >
          {/* Empty header bar */}
        </header>
      )}
    </Sticky>
  );
};

export default Header;