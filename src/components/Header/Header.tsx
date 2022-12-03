import React, { FC } from 'react';
import HeaderProps from "./header.interface";

const Header: FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
