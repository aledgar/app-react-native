import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Inicio extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FBEEA6"
    }
});

export default Inicio;
