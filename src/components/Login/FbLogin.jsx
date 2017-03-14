import React, { PropTypes } from 'react';
import './FbLogin.less';

class FbLogin extends React.Component {

  constructor(props) {
    super(props);
    this.onFbLoaded = this.onFbLoaded.bind(this);
    this.onFbLoginRequest = this.onFbLoginRequest.bind(this);

    window.onFbLoginLoaded = this.onFbLoaded;
  }

  onFbLoaded(){
    this.props.requestLoginStatus();
  }

  onFbLoginRequest(){
    this.props.requestFbLogin();
  }

  render() {
    let fbLoginComponent = (
      <div className="fb-login-container">
        <button className="btn btn-default fb-login-button pull-left" onClick={this.onFbLoginRequest}>
          Entrar com <i className="fa fa-facebook-square"></i>
        </button>
      </div>
    );
    if(this.props.loginStatus.status === 'connected'){

    }
    return fbLoginComponent;
  }
}

FbLogin.propTypes = {
  // onFbLoginChoice: PropTypes.func.isRequired,
};


export default FbLogin;
