import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import { COLORS, FONTS, SIZES, icons } from '../constants';
import { IconLabel } from '../components';

const VerticalCourseCard = ({ containerStyle, course }) => {
  return (
    <TouchableOpacity
      style={{
        width: 270,
        ...containerStyle,
      }}>
      {/*Thumbnail*/}
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />

      {/*Detail */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={icons.play}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>

        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: SIZES.radius,
          }}>
          <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
            {course.title}
          </Text>
          <IconLabel
            label={course.duration}
            icon={icons.time}
            containerStyle={{
              marginTop: SIZES.base
            }}
          
           />
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCourseCard;
