import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View, TextInput, } from 'react-native';
import firebase from '../config/firebase';

class CreateComponent extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('students');
    this.state = {
      name: '',
      designation: '',
      isLoading: false
    };
  }

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  addStudent() {
    if(this.state.name === ''){
     alert('Name is required.')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.ref.add({
        name: this.state.name,
        designation: this.state.designation,
      }).then((res) => {
        this.setState({
          name: '',
          designation: '',
          isLoading: false,
        });
        this.props.navigation.navigate('ReadComponent')
      })
      .catch((err) => {
        console.error("Error occured: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.onValUpdate(val, 'name')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder={'Designation'}
              value={this.state.designation}
              onChangeText={(val) => this.onValUpdate(val, 'designation')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Create'
            onPress={() => this.addStudent()} 
            color="black"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  formEle: {
    flex: 1,
    padding: 5,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#4e4e4e',
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default CreateComponent;