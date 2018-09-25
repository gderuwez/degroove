import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import NewUser from './components/NewUser';
import app from './components/firebaseAuth';
import 'firebase/auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'enter your email',
      password: 'enter a password',
      error: ''
    };
  }


  emailinputChange(input) {
    this.setState({email: input});
  }

  passwordinputChange(input) {
    this.setState({password: input});
  }

  submitNewUser() {
    var emailTrue = this.state.email;
    var passwordTrue = this.state.password;
    app.auth().createUserWithEmailAndPassword(emailTrue, passwordTrue).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('check ' + error.message);
      this.setState({error: errorMessage});
    });
  }

  submitExistingUser() {
    var emailTrue = this.state.email;
    var passwordTrue = this.state.password;
    app.auth().signInWithEmailAndPassword(emailTrue, passwordTrue).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('check2 ' + error.message);
      this.setState({error: errorMessage});
    });
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log("yup" + user);
        // ...
  } else {
    // User is signed out.
    console.log("nop");
    // ...
  }
});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <NewUser text={this.state.email} function={(input)=>this.emailinputChange(input)}/>
        <NewUser text={this.state.password} function={(input)=>this.passwordinputChange(input)}/>
        <Button
          onPress={()=>this.submitNewUser()}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={()=>this.submitExistingUser()}
          title="Sign in"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});