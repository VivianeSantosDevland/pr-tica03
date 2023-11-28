
import { View } from "react-native";
import { LayoutSplitter, LayoutSpl } from "./src/components/layoutSpliter";
//import { Label, LabelTarget} from "./src/components/label";
import { LayoutModal } from "./src/components/layoutModal/layoutModal";
import { Buttonbtn } from "./src/components/layoutModal/button";
import { Label } from "./src/components/label";
import { TextEdit } from "./src/components/textEdit/textEdit";
import { ButtonD } from "./src/components/layoutModal/button/buttonD";
 function App() {
  return (
//<LayoutSplitter></LayoutSplitter>
//<LayoutModal></LayoutModal>
//<Buttonbtn>Click here!</Buttonbtn>
//<Label>Hello world!</Label>
<>
<TextEdit/>
<ButtonD title="Clique" pressOn={beta}></ButtonD>
</>
  );
}
function beta(){
  alert('Hellooooooo');
 }
export default (App);
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
