import {StyleSheet} from "react-native"



const styles = StyleSheet.create({
  boxModal:{
    backgroundColor: "#f1f2f3",
    flex:1, 
    flexDirection: 'column',
    margin: 'auto', 
    height: 400,
    width: 500, 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
   
  },
  boxModalClosed:{
    flex:1, 
    flexDirection: 'row',
    margin: 'auto', 
    height: 500, 
    width: 500, 
    borderRadius: 8,
    justifyContent: 'center',
  },
  textTitleModal:{
    color: '#020202',
    fontWeight:"600",
    fontSize: 22,
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
  },

});

export {styles}