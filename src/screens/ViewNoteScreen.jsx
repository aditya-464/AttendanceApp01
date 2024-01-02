import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import ViewNoteScreenOptionsModal from '../components/ViewNoteScreenOptionsModal';
import EditNoteModal from '../components/EditNoteModal';
import DeleteNoteModal from '../components/DeleteNoteModal';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const ViewNoteScreen = props => {
  const {navigation} = props;
  const [content, setContent] = useState(null);
  const [titleBarHeight, setTitleBarHeight] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [editNoteModalView, setEditNoteModalView] = useState(false);
  const [deleteNoteModalView, setDeleteNoteModalView] = useState(false);
  const {refreshNotesValue} = useSelector(state => state.refreshNotesDetails);
  const [showLoader, setShowLoader] = useState(true);
  const route = useRoute();

  const handleOptionsModal = () => {
    setModalView(prev => !prev);
  };

  // EditNoteModalView Functions
  const handleOpenEditNoteModalView = value => {
    setEditNoteModalView(value);
  };
  const handleCloseEditNoteModalView = value => {
    setEditNoteModalView(value);
  };

  // DeleteNoteModalView Functions
  const handleOpenDeleteNoteModalView = value => {
    setDeleteNoteModalView(value);
  };
  const handleCloseDeleteNoteModalView = value => {
    setDeleteNoteModalView(value);
  };

  const onLayoutTitlebar = event => {
    const {height} = event.nativeEvent.layout;
    setTitleBarHeight(height);
  };

  const getNoteDetails = async id => {
    try {
      const noteDetails = await firestore().collection('Notes').doc(id).get();
      if (noteDetails._data.content) {
        setContent(noteDetails._data.content);
        setShowLoader(false);
      }
    } catch (error) {
      console.log(error);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    getNoteDetails(route.params.id);
  }, [refreshNotesValue]);

  return (
    <SafeAreaView
      style={{
        zIndex: -10,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <View onLayout={onLayoutTitlebar} style={styles.TitleBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotesScreen')}
          activeOpacity={0.6}
          style={styles.BackIcon}>
          <Ionicon
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>
        <View style={styles.TitleTextView}>
          <Text style={styles.TitleText}>Note</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleOptionsModal}
          style={styles.OptionsIcon}>
          <SimpleLineIcons
            name="options-vertical"
            size={22}
            color={COLORS.primaryDark}></SimpleLineIcons>
        </TouchableOpacity>
      </View>
      <ViewNoteScreenOptionsModal
        top={titleBarHeight}
        modalView={modalView}
        handleOptionsModal={handleOptionsModal}
        handleOpenEditNoteModalView={handleOpenEditNoteModalView}
        handleOpenDeleteNoteModalView={handleOpenDeleteNoteModalView}
      />
      <EditNoteModal
        handleCloseEditNoteModalView={handleCloseEditNoteModalView}
        editNoteModalView={editNoteModalView}
      />
      <DeleteNoteModal
        handleCloseDeleteNoteModalView={handleCloseDeleteNoteModalView}
        deleteNoteModalView={deleteNoteModalView}
      />
      {!showLoader && (
        <ScrollView>
          <View style={styles.NoteSubject}>
            <Text style={styles.NoteSubjectText}>{route.params.subject}</Text>
          </View>
          <View style={styles.NoteContent}>
            <Text style={styles.NoteContentText}>{content}</Text>
          </View>
        </ScrollView>
      )}

      {showLoader && (
        <View style={{marginTop: SPACING.space_15}}>
          <ActivityIndicator
            size={30}
            color={COLORS.placeholder}
            animating={showLoader}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ViewNoteScreen;

const styles = StyleSheet.create({
  TitleBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_8,
  },
  BackIcon: {
    width: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: SPACING.space_4,
  },
  TitleTextView: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: SPACING.space_10,
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
  },
  OptionsIcon: {
    width: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  NoteSubject: {
    width: '100%',
    padding: SPACING.space_12,
    paddingBottom: SPACING.space_8,
  },
  NoteSubjectText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryDark,
  },
  NoteContent: {
    width: '100%',
    paddingHorizontal: SPACING.space_12,
  },
  NoteContentText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
});
