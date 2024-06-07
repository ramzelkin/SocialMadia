import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>Welcome to the profile page</Text>
    </SafeAreaView>
  );
};

export default Profile;
