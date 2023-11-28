import { TextInput, StyleSheet, View, SafeAreaView} from "react-native";

const TextEdit  = () =>{
 return(
  <View>
    <TextInput style={styles.input}/>
  </View>
 )}


const styles = StyleSheet.create({
  input:{
    color: 'purple',
    fontSize: 16,
    width: 200,
    height: 40,
    borderColor: '#000000',
    //flex: 0.5,
    border: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    margin: "auto"
  },
  areaView:{
    width: 300,
    height: 60,
    flexDirection: 'column',
  }
});

export {TextEdit}