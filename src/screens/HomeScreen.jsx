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
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FlatListData = [
  {
    id: 'item1',
    subject: 'Operating Systems',
    branch: 'IT',
    semester: '5',
    section: 'C',
    bgcolor: 'dark',
  },
  {
    id: 'item2',
    subject: 'Artificial Intelligence',
    branch: 'IT',
    semester: '5',
    section: 'C',
    bgcolor: 'light',
  },
  {
    id: 'item3',
    subject: 'Computer Networks',
    branch: 'IT',
    semester: '5',
    section: 'C',
    bgcolor: 'dark',
  },
  {
    id: 'item4',
    subject: 'Data Base Management System',
    branch: 'IT',
    semester: '5',
    section: 'C',
    bgcolor: 'light',
  },
  {
    id: 'item5',
    subject: 'Object Oriented Programming Language',
    branch: 'IT',
    semester: '5',
    section: 'C',
    bgcolor: 'dark',
  },
];

const FlatListItem = ({subject, branch, semester, section, bgcolor}) => (
  <View
    style={[
      styles.ClassListItem,
      {
        backgroundColor:
          bgcolor === 'dark' ? COLORS.primaryDark : COLORS.primaryLight,
        borderWidth: bgcolor === 'dark' ? 0 : 0.3,
        borderColor: bgcolor === 'dark' ? 'transparent' : COLORS.placeholder,
      },
    ]}>
    <View style={styles.ClassListItemTop}>
      <Text
        style={[
          styles.ClassListItemTopText,
          {
            color:
              bgcolor === 'dark' ? COLORS.primaryLight : COLORS.primaryDark,
          },
        ]}>
        {subject}
      </Text>
    </View>
    <View style={styles.ClassListItemBottom}>
      <Text
        style={[
          styles.ClassListItemBottomText,
          {
            color:
              bgcolor === 'dark' ? COLORS.primaryLight : COLORS.primaryDark,
          },
        ]}>
        {branch + ' - '}
      </Text>
      <Text
        style={[
          styles.ClassListItemBottomText,
          {
            color:
              bgcolor === 'dark' ? COLORS.primaryLight : COLORS.primaryDark,
          },
        ]}>
        {semester + ' - '}
      </Text>
      <Text
        style={[
          styles.ClassListItemBottomText,
          {
            color:
              bgcolor === 'dark' ? COLORS.primaryLight : COLORS.primaryDark,
          },
        ]}>
        {section}
      </Text>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
      <View style={styles.CreateClass}>
        <TouchableOpacity style={styles.CreateClassButton}>
          <Ionicons
            name="add"
            size={FONTSIZE.size_32}
            color={COLORS.primaryLight}></Ionicons>
        </TouchableOpacity>
      </View>
      <FlatList
        data={FlatListData}
        renderItem={({item}) => (
          <FlatListItem
            subject={item.subject}
            branch={item.branch}
            semester={item.semester}
            section={item.section}
            bgcolor={item.bgcolor}
          />
        )}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  TitleBar: {
    width: '100%',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_8,
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
    top: Dimensions.get('window').height - 150,
    right: 20,
    zIndex: 10,
    elevation: Platform.OS === 'android' ? 50 : 0,
  },
  CreateClassButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: COLORS.secondaryDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ClassListItem: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryLight,
    marginBottom: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_20,
    marginHorizontal: SPACING.space_12,
    zIndex: -10,
  },
  ClassListItemTop: {},
  ClassListItemTopText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
  },
  ClassListItemBottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  ClassListItemBottomText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity: 0.8,
  },
});
