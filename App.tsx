
import { View } from "react-native";
import { LayoutSplitter } from "./src/components/layoutSpliter";
import { Label } from "./src/components/label";
//import { Label, LabelTarget} from "./src/components/label";
import { registerRootComponent } from 'expo';

 function App() {
  return (
<LayoutSplitter></LayoutSplitter>
  );
}

export default registerRootComponent(App);
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
