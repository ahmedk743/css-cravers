import React from 'react';
import { View, Text } from 'react-native';

import { COLORS, SIZES, FONTS, constants } from '../../constants';

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary2,
      }}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
