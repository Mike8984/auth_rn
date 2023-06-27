import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
  type?: string;
  bgColor?: string;
  fgColor?: string;
};

const Button: FC<Props> = ({
  title,
  onPress,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}
      onPress={onPress}>
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
