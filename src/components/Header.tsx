import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Image,
} from 'react-native';
import { useThemedStyles, Theme } from '../theme';

interface Props {
  children: string;
  shareContent?: string;
  showEnlargeButton?: boolean;
  onPressEnlarge?: Function;
}

const Header: React.FC<Props> = ({
  children,
  shareContent,
  showEnlargeButton,
  onPressEnlarge,
}) => {
  const styles = useThemedStyles(themedStyles);
  return (
    <View style={styles.container}>
      <Text
        style={styles.header}
        accessibilityRole="header"
        testID="header-text"
      >
        {children}
      </Text>

      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
      >
        {!!showEnlargeButton && !!onPressEnlarge && (
          <TouchableOpacity
            // testID="header-share"
            // accessibilityLabel="Share"
            // accessibilityRole="button"
            onPress={() => onPressEnlarge()}
            style={{ marginRight: 12 }}
          >
            <Image
              source={require('./enlarge.png')}
              resizeMode="contain"
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        )}
        {!!shareContent && (
          <TouchableOpacity
            testID="header-share"
            accessibilityLabel="Share"
            accessibilityRole="button"
            onPress={() => {
              Share.share({ message: shareContent });
            }}
          >
            <Image
              source={require('./share.png')}
              resizeMode="contain"
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const themedStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
      marginBottom: 5,
      marginHorizontal: 10,
      color: theme.colors.text,
    },
    shareIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      tintColor: theme.colors.text,
    },
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Header;
