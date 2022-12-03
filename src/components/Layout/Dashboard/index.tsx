import React, { FC } from 'react';
import DashboardProps from "./dashboard.interface";

const Index: FC<DashboardProps> = (props) => {
  const {
    children,
    className
  } = props
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Index;
