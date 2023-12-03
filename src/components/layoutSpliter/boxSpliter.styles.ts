import { StyleSheet} from "react-native";

const styles_box = StyleSheet.create({
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

export {styles_box}