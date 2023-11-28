
import  styled  from 'styled-components/native';
import { Container} from './layoutSpliter.styles';
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface BoxSplitterProps{
  tamanhoBox: number,
  background: string,
  children?: any
};


function BoxSplitterD({tamanhoBox, children, background}: BoxSplitterProps) {
 return(
 
    <View style={{
      backgroundColor: background,//#410751'
      flex: tamanhoBox,}}>
      {children}
    </View>
    

 );
}


  const styles = StyleSheet.create({
    container:{
      height: 600, 
      backgroundColor: '#000000',
      flex:1, 
      flexDirection: 'row',
    },
    box1:{
      backgroundColor: '#410751',
       flex:0.3,
    },
    box2:{
      backgroundColor: '#26003A',
       flex:0.7,
    }
  })



export {BoxSplitterD}

/*
function LayoutSplitterD({orientacao, tamanhoBox1, tamanhoBox2, children}: LayoutSplitterProps) {
 return(
  <View style={{
    height: 620, 
    backgroundColor: '#000000',
    flex:1, 
    flexDirection: orientacao ? 'column' : 'row',
  }}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
  </View>
 );
}
*/