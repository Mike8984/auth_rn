import {View, Text} from 'react-native';
import Button from '../button';

const SocialSignInButtons = () => {
  const handleSignInFacebook = () => {
    console.warn('facebook');
  };

  const handleSignInGoogle = () => {
    console.warn('google');
  };

  const handleSignInApple = () => {
    console.warn('apple');
  };

  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
