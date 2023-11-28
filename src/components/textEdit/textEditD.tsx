import { TextInput, StyleSheet, View, SafeAreaView} from "react-native";

const TextEditD  = () =>{
 return(
  <View>
    <TextInput style={styles.input}/>
  </View>
 )}


const styles = StyleSheet.create({
  input:{
    color: '#00000',
    fontSize: 16,
    width: 250,
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    //flex: 0.5,
    border: 'solid',
    borderRadius: 10,
    margin: "auto"
  },
  areaView:{
    width: 300,
    height: 60,
    flexDirection: 'column',
  }
});

export {TextEditD}