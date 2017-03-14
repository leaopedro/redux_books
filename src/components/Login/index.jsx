import React, { PropTypes } from 'react';
import FbLogin from './FbLogin.jsx';
import './style.less';

class Login extends React.Component {

  constructor(props) {
    super(props);

    // this.onChangeLogin = this.onChangeLogin.bind(this);
  }

  render() {

    return (
      <div className="login-container">
        <FbLogin {...this.props} />

      </div>
    );
  }
}

Login.propTypes = {
  // onLoginChoice: PropTypes.func.isRequired,
};


export default Login;
