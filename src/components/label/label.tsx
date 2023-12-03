import {styles} from './label.styles'
import {Text} from 'react-native';

interface LabelProps{
 children: string
}

const LabelD: React.ElementType<LabelProps> = ({children}) =>{
  return(
     <Text style={styles.font}>{children}</Text>
  );
}

export {LabelD}

