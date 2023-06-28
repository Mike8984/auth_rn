import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
  type?: string;
  bgColor?: string;
  fgColor?: string;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  title,
  onPress,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        disabled ? {opacity: 0.7} : {},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
