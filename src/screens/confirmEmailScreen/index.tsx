import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../types';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleConfirm = () => {
    navigation.navigate('Home');
  };

  const handleResend = () => {
    console.warn('handleResend');
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login')
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Input
          value={code}
          setValue={setCode}
          placeholder="enter your confirmation code"
        />

        <Button title="Confirm" onPress={handleConfirm} type="PRIMARY" />
        <Button title="Resend Code" onPress={handleResend} type="SECONDARY" />
        <Button
          title="Back to sign in"
          onPress={navigateToSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
