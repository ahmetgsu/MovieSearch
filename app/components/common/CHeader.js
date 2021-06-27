import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '.';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusbarHeight = getStatusBarHeight();

const CHeader = ({bgColor}) => {
  return (
    <Block
      flex={false}
      style={{...styles.header, backgroundColor: bgColor}}
      row>
      <Block flex={1} color={'lightgreen'} row center middle>
        <TouchableOpacity>
          <Text>left</Text>
        </TouchableOpacity>
      </Block>
      <Block flex={3} color={'lightsalmon'} row center middle>
        <Text>center</Text>
      </Block>
      <Block flex={1} color={'lightgreen'} row center middle>
        <TouchableOpacity>
          <Text>middle</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  header: {
    height: 60 + statusbarHeight,
    paddingTop: statusbarHeight,
  },
});
