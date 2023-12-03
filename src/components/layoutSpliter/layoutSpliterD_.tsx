
import  styled  from 'styled-components/native';
import { styles} from './layoutSpliter.styles';
import {View} from 'react-native';
import React from 'react';

interface LayoutSplitterProps{
  orientacao?: boolean,
  children?: any,
};


function LayoutSplitterD_({
  orientacao,
  children,
}: LayoutSplitterProps) {
 return(
  <View style={{
    padding: 10, 
    backgroundColor: '#000000',
    flex:1, 
    flexDirection: orientacao ? 'column' : 'row',
    }}>
      {children}
  </View>
 );
}




export {LayoutSplitterD_}

