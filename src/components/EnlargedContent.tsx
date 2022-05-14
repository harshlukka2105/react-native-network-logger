/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import JSONTree from 'react-native-json-tree';
import { isJson } from './RequestDetails';

interface Props {
  content: string;
  onPressClose: Function;
}

const EnlargedContent: React.FC<Props> = ({ content, onPressClose }) => {
  const jsonObject = isJson(content) ? JSON.parse(content) : String(content);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-end', margin: 16 }}>
        <TouchableOpacity onPress={() => onPressClose()}>
          <Text style={{ fontSize: 20, color: 'dodgerblue' }}>{'Close'}</Text>
        </TouchableOpacity>
      </View>

      <JSONTree
        data={jsonObject}
        theme={'isotope'}
        // invertTheme={theme === 'light' ? true : false}
      />
    </ScrollView>
  );
};

export default EnlargedContent;
