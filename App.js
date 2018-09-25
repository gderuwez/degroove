// Fixes isomorphic-fetch
GLOBAL.self = GLOBAL;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import {Button, Avatar, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
// import RootStack from './components/router';
import HeaderDGR from './components/Header';
import LoginDGR from './components/Login';
import ProjectDescription from './components/ProjectDescription';
import ProjectsList from './components/ProjectsList';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SignUp from './components/SignUp'

export default class App extends React.Component {
  render() {
    return (
      // <ScrollView style={styles.container}>
      //   {/* <View style={styles.header}>
      //   <HeaderDGR/>
      //   </View>
      //   <LoginDGR/>
      //   <ProjectsList></ProjectsList> */}
      //   {/* <Text>Test</Text> */}
        // <RootStack/>
      //   {/* <HomeScreen/>
      //   <DetailsScreen/> */}
      // </ScrollView>
      // <ScrollView style={styles.container}>
      // <RootStack/>
      // </ScrollView>
      // );

      <ScrollView style={styles.container}>
        <View style={styles.header}>
        <HeaderDGR/>
        </View>
        <LoginDGR/>
        {/* <ProjectsList></ProjectsList> */}
        <SignUp/>
      </ScrollView>
    );

    }
  }
const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      ProjectDescription: ProjectDescription,
      ProjectsList: ProjectsList,
    },
    {
      initialRouteName: 'Home',
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: 'rgb(240,240,240)',
    //alignItems: 'center',
  },
  header: {
    width: "100%",
  },

  text :{
    color: "white",
  }
});
