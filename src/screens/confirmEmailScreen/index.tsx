import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const handleConfirm = () => {
    console.warn('handleConfirm');
  };

  const handleResend = () => {
    console.warn('handleResend');
  }

  const navigateToSignIn = () => {
    console.warn('navigateToSignIn');
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
