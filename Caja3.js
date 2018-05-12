import React, { Component } from 'react'
import {Text, View, Button, StyleSheet} from 'react-native';

class Caja3 extends Component {
  render() {
    return (
      <View style={style.cajaTres}>
          <Button
            title="Aumentar"
            onPress={this.props.aumentar}
          />
          <Button 
            title="Disminuir"
            onPress={this.props.disminuir}
          />
      </View>
    )
  }
}

const style = StyleSheet.create({
    cajaTres:{
        flex:1,
        padding:65,
        backgroundColor: "#581845",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center" 
      }
});

export default Caja3;
