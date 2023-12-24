import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import ViewNoteScreenOptionsModal from '../components/ViewNoteScreenOptionsModal';

const ViewNoteScreen = () => {
  const [titleBarHeight, setTitleBarHeight] = useState(null);
  const [modalView, setModalView] = useState(false);

  const handleOptionsModal = () => {
    setModalView(prev => !prev);
  };

  const onLayoutTitlebar = event => {
    const {height} = event.nativeEvent.layout;
    setTitleBarHeight(height);
  };

  return (
    <SafeAreaView
      style={{
        zIndex: -10,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <View onLayout={onLayoutTitlebar} style={styles.TitleBar}>
        <TouchableOpacity activeOpacity={0.6} style={styles.BackIcon}>
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
        modalView={modalView}></ViewNoteScreenOptionsModal>
      <ScrollView>
        <View style={styles.NoteSubject}>
          <Text style={styles.NoteSubjectText}>
            Operating Systems Unit Test - II
          </Text>
        </View>
        <View style={styles.NoteContent}>
          <Text style={styles.NoteContentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tenetur sit numquam nam odit maxime, animi modi earum odio, dolore
            voluptate ex quisquam unde iure. Quos commodi quaerat voluptatem
            laboriosam temporibus, non nesciunt, alias odit minus blanditiis
            rerum quo placeat maxime voluptate dignissimos nam quidem earum
            asperiores numquam quod obcaecati et sint dolores delectus.
          </Text>
        </View>
      </ScrollView>
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
