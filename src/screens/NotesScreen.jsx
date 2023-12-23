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
    title: 'Operating Systems Test',
    subject: 'Exam to be taken on Memory Management and File System',
    bgcolor: 'dark',
  },
  {
    id: 'item2',
    title: 'Data Structure and Algorithms Notes',
    subject: 'Exam to be taken on Memory Management and File System',
    bgcolor: 'light',
  },
  {
    id: 'item3',
    title: 'Mock Test Preparation',
    subject: 'Exam to be taken on Memory Management and File System',
    bgcolor: 'dark',
  },
  {
    id: 'item4',
    title: 'Avenir and Inceptra Donation',
    subject: 'Exam to be taken on Memory Management and File System',
    bgcolor: 'light',
  },
  {
    id: 'item5',
    title: '5th Semester Marksheet Distribution',
    subject: 'Exam to be taken on Memory Management and File System',
    bgcolor: 'dark',
  },
];

const FlatListItem = ({title, bgcolor}) => (
  <View
    style={[
      styles.NotesListItem,
      {
        backgroundColor: bgcolor === 'dark' ? COLORS.primaryDark : 'white',
      },
    ]}>
    <View style={styles.NotesListItemTop}>
      <Text
        style={[
          styles.NotesListItemTopText,
          {
            color:
              bgcolor === 'dark' ? COLORS.primaryLight : COLORS.primaryDark,
          },
        ]}>
        {title}
      </Text>
    </View>
    {/* <View style={styles.ClassListItemBottom}>
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
    </View> */}
  </View>
);

const NotesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.TitleBar}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Notes</Text>
        </View>
        <View style={styles.Menu}>
          <Ionicons
            name="list"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}></Ionicons>
        </View>
      </View>
      <View style={styles.CreateNote}>
        <TouchableOpacity style={styles.CreateNoteButton}>
          <Ionicons
            name="add"
            size={FONTSIZE.size_32}
            color={COLORS.primaryLight}></Ionicons>
        </TouchableOpacity>
      </View>
      <FlatList
        data={FlatListData}
        renderItem={({item}) => (
          <FlatListItem title={item.title} bgcolor={item.bgcolor} />
        )}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default NotesScreen;

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
  CreateNote: {
    position: 'absolute',
    top: Dimensions.get('window').height - 150,
    right: 20,
    zIndex: 10,
    elevation: Platform.OS === 'android' ? 50 : 0,
  },
  CreateNoteButton: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: COLORS.secondaryDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotesListItem: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryLight,
    marginBottom: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_20,
    marginHorizontal: SPACING.space_12,
    elevation: 2,
    zIndex: -10,
  },
  NotesListItemTop: {},
  NotesListItemTopText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryDark,
  },
});
