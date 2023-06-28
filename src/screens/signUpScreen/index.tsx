import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import SocialSignInButtons from '../../components/socialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  const handleTermsOfUse = () => {
    console.warn('handleTermsOfUse');
  };

  const handlePrivacyAndPolicy = () => {
    console.warn('handlePrivacyAndPolicy');
  };

  const navigateToSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Input value={username} setValue={setUsername} placeholder="username" />
        <Input value={email} setValue={setEmail} placeholder="email" />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="password"
          secureTextEntry
        />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="confirm password"
          secureTextEntry
        />
        <Button title="Register" onPress={handleRegister} type="PRIMARY" />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={handleTermsOfUse}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={handlePrivacyAndPolicy}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <Button
          title="Have an account? Sign in"
          onPress={navigateToSignIn}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
