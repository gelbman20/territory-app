import React, { FC } from 'react';
import AuthInterface from './auth.interface';
import style from './auth.module.scss';
import authBackground from '@/assets/images/auth-background.jpeg';

const Auth: FC<AuthInterface> = (props) => {
  const { children } = props;
  return (
    <div className={style.auth}>
      <div className={style.authImage}>
        <img src={authBackground} alt="" />
      </div>
      <div className={style.authContent}>{children}</div>
    </div>
  );
};

export default Auth;
