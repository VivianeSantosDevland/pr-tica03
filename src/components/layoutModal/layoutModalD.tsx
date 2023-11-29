/*  Este componente deve oferecer possibilidade de apresentar uma caixa de diálogo modal com no mínimo um botão "close(fechar)". O componente deve acomodar um ou mais componentes*/

import  styled  from 'styled-components/native';
import {View, Text, StyleSheet, Modal} from 'react-native';
import { Buttonbtn } from './button';
import { ButtonD } from './button/buttonD';
import {useState} from 'react';



interface propsModal{

  title?: string, 
  children?: any 
}

function LayoutModalD({
  title,
  children,
}: propsModal) {
  const [isVisible, setIsVisible] = useState(true);
  
  if(!isVisible){
    return(
      <View style={styles.boxModal}>
        <View>
          <Text style={styles.textTitleModal}>{title}</Text>
        </View>
        {children}
        <ButtonD title='Fechar' pressOn={setIsVisible(!isVisible)}></ButtonD>
      </View>
     );
  }else{
    return(
      <ButtonD title='Fechar' pressOn={setIsVisible(!isVisible)}></ButtonD>
    )
  }
}
/*
function BtnModal(){
  return(
    <View style={styles.viewBtnModalClosed}>
      <ButtonD title='Fechar' pressOn={setIsVisible(!isVisible)}></ButtonD>
    </View>
  );
}*/

 const styles = StyleSheet.create({
  boxModal:{
    backgroundColor: "#26003A",
    flex:1, 
    flexDirection: 'row',
    margin: 'auto', 
    height: 500, 
    borderRadius: 8,
    justifyContent: 'center',
   
  },
  boxModalClose:{
    display: 'none'
  },
  textTitleModal:{
    color: '#fafafa',
    fontWeight:"600",
    fontSize: 18,
    margin: 'auto'
  },
  viewTitle:{
    flex: 0.1,
    height: 100
  },
  viewBtnModalClosed:{
    height: 500,
    width: 1000,
    margin: 'auto'
  }
});

export {LayoutModalD}




/*-----------------------------
<ButtonD title='Abrir' pressOn={setIsOpen(!isOpen)}></ButtonD>
    {children}

if (isOpen) {
      <View>
        <Text style={styles.textTitleModal}>{title}</Text>
        {children}
        <ButtonD title='Fechar' pressOn={setIsOpen(!isOpen)}></ButtonD>
      </View>
    }else{
      <></>
    }



const styles = StyleSheet.create({
    green: {
        borderColor: 'green',
    },
    red: {
        borderColor: 'red',
    },
    
});

<TextInput style={[styles.otpBox, this.state.stateName ?
    styles.green :
    styles.red ]} />

    ---------------------------
const [isOpen, setIsOpen] = useState(false);
const LayoutModalD: React.ElementType<propsModal> = ({title, children}) =>{
  return(
     <View style={styles.boxModal}>
      <Text>{title}</Text>
        {children}
        <ButtonD title='Close' pressOn={setIsOpen(!isOpen)}>Click</ButtonD>
     </View>
 
  );
 }

style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.button,
        ]}
*/
 /*exemplo de css condicional
  <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.button,
        ]}
        onPress={() => Alert.alert('Button Pressionado!')}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>

/*
  React.ElementType<ButtonProps> = ({title, pressOn}) =>

function LayoutModalD(){
 return(
    <View style={styles.boxModal}>

      <ButtonD title='Close' pressOn={closeModal}>Click</ButtonD>
    </View>
  
 );
}
*/

