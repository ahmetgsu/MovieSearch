import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors} from '../../styles/colors';
import {Block, Text} from '../common';

const statusbarHeight = getStatusBarHeight();

const HomeHeader = ({bgColor, onPress}) => {
  return (
    <Block
      flex={false}
      style={{...styles.header, backgroundColor: bgColor}}
      center
      middle
      row>
      <Block flex={1}></Block>
      <Block flex={3} row center middle>
        <Text color={'green'} weight="bold" size={22}>
          Movie Search
        </Text>
      </Block>
      <Block flex={1} row center middle>
        <TouchableOpacity onPress={onPress}>
          <FastImage
            source={require('../../assets/icons/loupe.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.searchIcon}
            tintColor={'green'}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    height: 60 + statusbarHeight,
    paddingTop: statusbarHeight,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});
