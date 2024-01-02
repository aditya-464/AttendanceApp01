import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';
import {DrawerActions} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

// const FlatListData = [
//   {
//     id: 'item1',
//     title: 'Operating Systems Test',
//     subject: 'Exam to be taken on Memory Management and File System',
//     bgcolor: 'dark',
//   },
//   {
//     id: 'item2',
//     title: 'Data Structure and Algorithms Notes',
//     subject: 'Exam to be taken on Memory Management and File System',
//     bgcolor: 'light',
//   },
//   {
//     id: 'item3',
//     title: 'Mock Test Preparation',
//     subject: 'Exam to be taken on Memory Management and File System',
//     bgcolor: 'dark',
//   },
//   {
//     id: 'item4',
//     title: 'Avenir and Inceptra Donation',
//     subject: 'Exam to be taken on Memory Management and File System',
//     bgcolor: 'light',
//   },
//   {
//     id: 'item5',
//     title: '5th Semester Marksheet Distribution',
//     subject: 'Exam to be taken on Memory Management and File System',
//     bgcolor: 'dark',
//   },
// ];

const FlatListItem = ({navigation, subject, bgcolor}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ViewNoteScreen')}
    activeOpacity={0.6}
    style={[
      styles.NotesListItem,
      {
        backgroundColor:
          bgcolor === 'dark' ? COLORS.primaryDark : COLORS.primaryLight,
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
        {subject}
      </Text>
    </View>
  </TouchableOpacity>
);

const NotesScreen = props => {
  const [notesData, setNotesData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const {navigation} = props;
  const {uid} = useSelector(state => state.authDetails);
  const {refreshNotesValue} = useSelector(state => state.refreshNotesDetails);

  const getUserDetails = async uid => {
    try {
      const user = await firestore().collection('Users').doc(uid).get();
      if (user._data) {
        setNotesData(user._data.notes);
        setShowLoader(false);
      }
    } catch (error) {
      setShowLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails(uid);
  }, [refreshNotesValue, uid]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryLight}}>
      <View style={styles.TitleBar}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Notes</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          activeOpacity={0.6}
          style={styles.Menu}>
          <Ionicons
            name="menu"
            size={FONTSIZE.size_30}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.CreateNote}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateNoteScreen')}
          activeOpacity={0.6}
          style={styles.CreateNoteButton}>
          <Ionicons
            name="add"
            size={FONTSIZE.size_32}
            color={COLORS.primaryLight}></Ionicons>
        </TouchableOpacity>
      </View>
      {!showLoader && (
        <FlatList
          data={notesData}
          renderItem={({item}) => (
            <FlatListItem
              navigation={navigation}
              subject={item.subject}
              bgcolor={item.bgcolor}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={true}
          ListEmptyComponent={
            <View style={styles.EmptyListView}>
              <Text style={styles.EmptyListViewText}>No Notes</Text>
            </View>
          }
        />
      )}
      {showLoader && (
        <ActivityIndicator
          animating={showLoader}
          size={30}
          color={COLORS.placeholder}
        />
      )}
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
    marginBottom: SPACING.space_20,
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
  EmptyListView: {
    marginTop: SPACING.space_15,
  },
  EmptyListViewText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.placeholder,
    textAlign: 'center',
  },
});
