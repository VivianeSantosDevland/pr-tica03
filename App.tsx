
import { View, Text, Modal } from "react-native";
import { LayoutSplitter, LayoutSpl } from "./src/components/layoutSpliter";
//import { Label, LabelTarget} from "./src/components/label";
import { LayoutModal } from "./src/components/layoutModal/layoutModal";
import { Buttonbtn } from "./src/components/layoutModal/button";
import { LabelD } from "./src/components/label";
import { TextEdit } from "./src/components/textEdit/textEdit";
import { ButtonD } from "./src/components/layoutModal/button/buttonD";
import { TextEditD } from "./src/components/textEdit/textEditD";
import { BoxSplitter, LayoutSplitterD } from "./src/components/layoutSpliter/layoutSpliterD";
import { LayoutSplitterD_ } from "./src/components/layoutSpliter/layoutSpliterTeste";
import {BoxSplitterD} from './src/components/layoutSpliter/boxSplitter'
 function App() {
  return (

      <LayoutSplitterD_ orientacao={false}>
        <BoxSplitterD tamanhoBox={0.2} background="#410751">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box ummmmmmmm</Text>
        </BoxSplitterD>
        <BoxSplitterD tamanhoBox={0.8} background="#26003A">
          <Text style={{color: "#ffffff", fontSize:20, margin: "auto"}}>Este é o box doiiiiiiiiiiiissssssssss</Text>
        </BoxSplitterD>
      </LayoutSplitterD_>
   
      
    
  );
}

export default (App);


/*
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
