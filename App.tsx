
import { View, Text, Modal } from "react-native";
import { LayoutSplitter, LayoutSpl } from "./src/components/layoutSpliter";
//import { Label, LabelTarget} from "./src/components/label";
import { LayoutModal } from "./src/components/layoutModal/layoutModal";
import { Buttonbtn } from "./src/components/layoutModal/button";
import { LabelD } from "./src/components/label";
import { TextEdit } from "./src/components/textEdit/textEdit";
import { ButtonD } from "./src/components/layoutModal/button/buttonD";
import { TextEditD } from "./src/components/textEdit/textEditD";
import { LayoutSplitterD } from "./src/components/layoutSpliter/layoutSpliterD";
 function App() {
  return (

      <LayoutSplitterD orientacao></LayoutSplitterD>
    
  );
}

export default (App);


/*
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
