import React from 'react';
import { Container, Row, Button } from 'reactstrap';

const Login = () => (
  <div className="loginText align-middle">
    <div className="loginChildren">
      <h1 className="title">NextShow</h1>
      <Button href="/auth/spotify" color="success">Login with Spotify</Button>
    </div>
  </div>
);

export default Login;
