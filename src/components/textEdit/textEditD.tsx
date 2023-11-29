import { TextInput, StyleSheet, View, SafeAreaView} from "react-native";
import { LabelD } from "../label";

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


const styles = StyleSheet.create({
  input:{
    color: '#141515',
    fontSize: 16,
    width: 250,
    height: 40,
    borderColor: '#33A0AA',
    borderBottomWidth: 1,
    //flex: 0.5,
    border: 'solid',
    borderRadius: 10,
    margin: "auto",
    marginTop: 5,
    marginLeft: 20
  },
  areaView:{
    width: 300,
    height: 60,
    flexDirection: 'column',
  }
});

export {TextEditD}