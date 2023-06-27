import {FC} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  setValue: () => void;
  placeholder: string;
  secureTextEntry: boolean;
};

const Input: FC<Props> = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
