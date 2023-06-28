import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleForgot = () => {
    navigation.navigate('ResetPassword');
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <Input value={username} setValue={setUsername} placeholder="username" />

        <Button title="Send" onPress={handleForgot} type="PRIMARY" />

        <Button
          title="Back to sign in"
          onPress={navigateToSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
