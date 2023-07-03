import {useState} from 'react';
import {View, useWindowDimensions, Image, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../types';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignInFacebook = () => {
    console.warn('facebook');
  };

  const handleSignInGoogle = () => {
    console.warn('google');
  };

  const handleSignInApple = () => {
    console.warn('apple');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} />
        <Input value={email} setValue={setEmail} placeholder="email" />
        <Input
          value={password}
          setValue={setPassword}
          placeholder="password"
          secureTextEntry
        />
        <Button title="Sign In" onPress={handleLogin} type="PRIMARY" />
        <Button
          title="Forgot password"
          onPress={handleForgotPassword}
          type="TERTIARY"
        />
        <Button
          title="Sign In with facebook"
          onPress={handleSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <Button
          title="Sign In with google"
          onPress={handleSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <Button
          title="Sign In with apple"
          onPress={handleSignInApple}
          type="TERTIARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <Button
          title="Don't have an account? Create one"
          onPress={handleSignUp}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
