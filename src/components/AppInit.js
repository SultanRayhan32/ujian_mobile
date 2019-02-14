import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDlk0iUHx4nDN8mkSiSXC8X75P8yA5FcR4",
      authDomain: "manager-sultan.firebaseapp.com",
      databaseURL: "https://manager-sultan.firebaseio.com",
      projectId: "manager-sultan",
      storageBucket: "manager-sultan.appspot.com",
      messagingSenderId: "466239990411"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
        <Main />
    );
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);