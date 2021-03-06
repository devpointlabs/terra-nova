import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
    .then( res => {
      axios.post(`/api/users/${res.data.data.id}`)
      .then( res => { console.log(res)})
      history.push("/");
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user )
    .then ( res => {
      this.setState({ user: res.data.data, })
      history.push("/");
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
    .then( res => {
      this.setState({ user: null, });
      history.push('/admin');
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;