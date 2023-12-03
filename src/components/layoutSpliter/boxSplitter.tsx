import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface BoxSplitterProps{
  tamanhoBox: number,
  background?: string,
  children?: any
};


function BoxSplitterD({tamanhoBox, children, background}: BoxSplitterProps) {
 return(
 
    <View style={{
      backgroundColor: background,
      flex: tamanhoBox,}}>
      {children}
    </View>
    

 );
}


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