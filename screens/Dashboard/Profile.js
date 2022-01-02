import React from 'react';
import { View, Text } from 'react-native';

import { COLORS, SIZES, FONTS, constants } from '../../constants';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
