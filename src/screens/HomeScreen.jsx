import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FlatListData = [
  {
    "id" : "item1",
    "subject" : "Operating Systems",
    "semester" : "5th",
    "section" : "C"
  },
  {
    "id" : "item2",
    "subject" : "Artificial Intelligence",
    "semester" : "5th",
    "section" : "C"
  },
  {
    "id" : "item3",
    "subject" : "Computer Networks",
    "semester" : "5th",
    "section" : "C"
  },
  {
    "id" : "item4",
    "subject" : "Data Base Management System",
    "semester" : "5th",
    "section" : "C"
  },
  {
    "id" : "item5",
    "subject" : "Object Oriented Programming Language",
    "semester" : "5th",
    "section" : "C"
  },
];

const FlatListItem = ({subject, semester, section}) => {
  <View style={styles.ClassListItem}></View>
};

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.TitleBar}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Home</Text>
        </View>
        <View style={styles.Menu}>
          <Ionicons
            name="list"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </View>
      </View>
      <View style={styles.MainContent}>
        <View style={styles.CreateClass}>
          <TouchableOpacity style={styles.CreateClassButton}>
            <Ionicons
              name="add"
              size={FONTSIZE.size_30}
              color={COLORS.primaryLight}></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={styles.ClassList}>
          <FlatList></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TitleBar: {
    width: '100%',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    width: '80%',
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryDark,
  },
  Menu: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING.space_4,
  },
  CreateClass: {
    position: 'absolute',
    top: Dimensions.get('window').height - 200,
    right: 20,
  },
  CreateClassButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
    backgroundColor: COLORS.secondaryDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
