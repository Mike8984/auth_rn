import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../types';

const ResetPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <Input value={code} setValue={setCode} placeholder="code" />
        <Input
          value={newPassword}
          setValue={setNewPassword}
          placeholder="enter your new password"
        />

        <Button title="Submit" onPress={handleSubmit} type="PRIMARY" />

        <Button
          title="Back to sign in"
          onPress={navigateToSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
