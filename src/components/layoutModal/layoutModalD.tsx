
import  styled  from 'styled-components/native';
import {View, Text, StyleSheet} from 'react-native';
import { Buttonbtn } from './button';




function LayoutModal(){
 return(
    <View style={{backgroundColor: '#26003A', flex:0.5, margin: 'auto', height: 500, borderRadius: 8}}>
      <Buttonbtn>Click</Buttonbtn>
    </View>
  
 );
}




export {LayoutModal}

