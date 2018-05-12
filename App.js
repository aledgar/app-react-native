import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from './Inicio';
import Caja2 from './Caja2';
import Caja3 from './Caja3';
//export default 
class App extends React.Component {

  constructor(){

    super();
    this.state = {
      numero:10
    }
  }

  aumentar = () =>{
    this.state.numero++;
    this.setState({
      numero:this.state.numero
    })
  }

  disminuir = () =>{
    this.state.numero--;
    this.setState({
      numero:this.state.numero
    })
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Inicio name="Calculadora" />
        <Caja2 valor={this.state.numero}  />
        <Caja3 aumentar={this.aumentar} disminuir={this.disminuir} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  cajaUno:{
    flex:1,
    backgroundColor: "#DAF7A6",
    alignItems:"center",
    justifyContent:"center"
  }
  // cajaTres:{
  //   flex:1,
  //   padding:65,
  //   backgroundColor: "#581845",
  //   justifyContent:"space-between",
  //   flexDirection:"row",
  //   alignItems:"center" 
  // }
});

export default App;