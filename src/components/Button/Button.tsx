import React, { FC } from 'react';
import cn from 'classnames';
import ButtonProps from './button.interface';
import style from './button.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const { children, url, variant = 'primary', size = '' } = props;
  const classNames = cn(style.button, style[variant], style[size]);

  const ComponentTag = url?.length ? 'a' : 'button';

  return <ComponentTag className={classNames}>{children}</ComponentTag>;
};

export default Button;
