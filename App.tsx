
import { View, Text, StyleSheet} from "react-native";
import { TextEditD } from "./src/components/textEdit/textEditD";
import { LayoutSplitterD_ } from "./src/components/layoutSpliter/layoutSpliterTeste";
import {BoxSplitterD} from './src/components/layoutSpliter/boxSplitter';
import { LayoutModalD } from "./src/components/layoutModal/layoutModalD";


 function App() {
  return (
     <LayoutSplitterD_ orientacao={false}>
        <BoxSplitterD tamanhoBox={0.3} background="#410751">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box ummmmmmmm</Text>
          <View style={styles.viewBtn}>
            <LayoutModalD title="Cadastro">
              <TextEditD textLabel="Nome:"></TextEditD>
              <TextEditD textLabel="CPF:"></TextEditD>
              <TextEditD textLabel="Cidade:"></TextEditD>
              <TextEditD textLabel="Endereço:"></TextEditD>
              <TextEditD textLabel="CEP:"></TextEditD>
            </LayoutModalD>
          </View>
        </BoxSplitterD>
        <BoxSplitterD tamanhoBox={0.8} background="#26003A">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box doiiiiiiiiiiiissssssssss</Text>
        </BoxSplitterD>
      </LayoutSplitterD_>
    
  );
}
const styles = StyleSheet.create({
viewBtn:{
  width: 120,
  height: 80,
  alignItems: "center",
  marginBottom: 150},
})




export default (App);
/*
<LayoutModalD></LayoutModalD>
<LayoutModalD title="Este é um modal"></LayoutModalD>

<LayoutSplitterD_ orientacao={false}>
        <BoxSplitterD tamanhoBox={0.2} background="#410751">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box ummmmmmmm</Text>
        </BoxSplitterD>
        <BoxSplitterD tamanhoBox={0.8} background="#26003A">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box doiiiiiiiiiiiissssssssss</Text>
        </BoxSplitterD>
      </LayoutSplitterD_>






<LayoutSplitterD tamanhoBox1={0.2} tamanhoBox2={0.8} orientacao={true}>
        
      </LayoutSplitterD>
//<LayoutSplitter></LayoutSplitter>
//<LayoutModal></LayoutModal>
//<Buttonbtn>Click here!</Buttonbtn>
//<Label>Hello world!</Label>
//<TextEdit/>
//<LayoutModalD title="Título aqui">
 // <Text>Testando modal</Text>
 // </LayoutModalD>
 //  <ButtonD title="Clique" pressOn={beta}></ButtonD>
//<TextEditD textLabel="Nome:"></TextEditD>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
