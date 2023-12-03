import { TextInput, View} from "react-native";
import { LabelD } from "../label";
import {styles} from './textEdit.style'

interface propsTxtEdit{
  textLabel: string
}
const TextEditD  = ({textLabel}: propsTxtEdit) =>{
 return(
  <View>
    <LabelD>{textLabel}</LabelD>
    <TextInput style={styles.input}/>
  </View>
 )}


export {TextEditD}