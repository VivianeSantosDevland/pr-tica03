/*  Este componente deve oferecer possibilidade de apresentar uma caixa de diálogo modal com no mínimo um botão "close(fechar)". O componente deve acomodar um ou mais componentes*/
import {View, Text, Modal} from 'react-native';
import { ButtonD } from '../button/buttonD';
import {useState} from 'react';
import {styles} from './layoutModal.style'


interface propsModal{

  title?: string, 
  children?: any 
}

function LayoutModalD({
  title,
  children,
}: propsModal) {
  const [isVisible, setIsVisible] = useState(false);
    return(
      <View>
        <Modal
         visible={isVisible}
         animationType='fade'
         onRequestClose={() =>{
         setIsVisible(!isVisible)}}>
          <View style={styles.boxModal}>
            <Text style={styles.textTitleModal}>{title}</Text>             
              {children}
                <ButtonD title='Fechar' pressOn={() =>{
                setIsVisible(!isVisible)}}></ButtonD>  
          </View>
      </Modal>      
        <View style={styles.boxModalClosed}>
        <ButtonD title='Abrir' pressOn={() =>{
          setIsVisible(true)}}></ButtonD>
        </View>
      </View>
     );
  
};


export {LayoutModalD}
