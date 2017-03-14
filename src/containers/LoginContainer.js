import { connect } from 'react-redux';
import Login from '../components/Login';
import { requestLoginStatus, requestFbLogin } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestLoginStatus: () => {
      dispatch(requestLoginStatus());
    },
    requestFbLogin: () =>{
      dispatch(requestFbLogin());
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer
