import React, { FC } from 'react';
import LoginProps from './login.interface';
import Auth from '@/components/Layout/Auth/Auth';
import style from './login.module.scss';

const Login: FC<LoginProps> = () => {
  return (
    <Auth>
      <div className={style.login}>
        <div className={style.header}>
          <h1>Login</h1>
        </div>
        <div className={style.content}></div>
        <div className={style.footer}>You don&apos;t have an account? Please register</div>
      </div>
    </Auth>
  );
};

export default Login;
