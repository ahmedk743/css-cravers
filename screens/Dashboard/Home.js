import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
  IconButton,
  TextButton,
  VerticalCourseCard,
  LineDivider,
} from '../../components';
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  dummyData,
} from '../../constants';

const Section = ({containerStyle, title, onPress, children}) => {
  return (
    <View></View>
  )
}

const Home = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h1 }}>Salam, Cravers!</Text>
          <Text style={{ color: COLORS.gray50, ...FONTS.body3 }}>
            Sunday, 2nd Jan 2022
          </Text>
        </View>

        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  };

  const renderStartLearning = () => {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        <View>
          <Text style={{ color: COLORS.white, ...FONTS.body2 }}>HOW TO</Text>
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
            Make your brand more visible with our checklist
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
              marginTop: SIZES.radius,
            }}>
            By Waqas Ahmed
          </Text>
        </View>

        <Image
          source={images.start_learning}
          style={{ width: '100%', height: 110, marginTop: SIZES.padding }}
        />

        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  };

  const renderCourses = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_2}
        listKey="Courses"
        keyExtractor={(item) => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({ item, index }) => (
          <VerticalCourseCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.courses_list_2.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  };

  const renderCategories = () => {
    return(
      <Section></Section>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/*renderHeader()*/}
      {/* Content Section */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}>
        {/*Start Learning */}
        {/*renderStartLearning()*/}

        {/*Courses */}
        {renderCourses()}

        <LineDivider lineStyle={{ marginVertical: SIZES.padding }} />

        {/* Categories */}
        {renderCategories()}
      </ScrollView>
    </View>
  );
};

export default Home;
