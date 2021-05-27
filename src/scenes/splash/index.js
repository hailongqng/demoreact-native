import React from 'react';
import {Image, SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" />
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://lh3.googleusercontent.com/proxy/ASzUvohb0-SzoDWZXohUpVpNl04Q0Xs_iC4UjSRmZW0QxqOEs6wLd6Zmg1OSP0iKW7WQ9v9PjfNAaFSt4veLuz9ZU64OTqcTtKxsuNReLQHcImAwc2eZWh9gXumENf52c1gvT-FeJL4tHWnRgqHto4J0DmSS8jq5BJhvkiXY8Q',
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
