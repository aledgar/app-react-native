import React, { Component } from 'react'
import {Text, StyleSheet, View } from 'react-native';

class Caja2 extends Component {
  render() {
    return (
      <View style={styles.cajaDos} >
        <Text>{this.props.valor}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    cajaDos:{ 
        flex:2,
        backgroundColor: "#FEBF6E",
        justifyContent:"center",
        alignItems:"center"
    }

});

export default Caja2;
