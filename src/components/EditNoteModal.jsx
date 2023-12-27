import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const EditNoteModal = props => {
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState(null);
  const {handleCloseEditNoteModalView, editNoteModalView} = props;

  return (
    <SafeAreaView>
      <Modal useNativeDriver={true} isVisible={editNoteModalView}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={styles.EditNoteModal}>
            <View style={styles.CloseModal}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.CloseModalButton}
                onPress={() => handleCloseEditNoteModalView(false)}>
                <Ionicons
                  name="close"
                  size={FONTSIZE.size_30}
                  color={COLORS.primaryDark}></Ionicons>
              </TouchableOpacity>
            </View>
            <Text style={styles.EditNoteTitle}>Edit Note</Text>
            <TextInput
              style={styles.InputField}
              placeholder="Subject"
              value={subject}
              onChangeText={text => setSubject(text)}></TextInput>
            <TextInput
              style={styles.InputField}
              placeholder="Content"
              value={content}
              multiline
              numberOfLines={3}
              onChangeText={text => setContent(text)}></TextInput>

            <View style={styles.ButtonView}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.EditNoteButton}>
                <Text style={styles.EditNoteText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default EditNoteModal;

const styles = StyleSheet.create({
  EditNoteModal: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: BORDERRADIUS.radius_10,
    padding: SPACING.space_16,
  },
  CloseModal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  CloseModalButton: {},
  EditNoteTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
  },
  InputField: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_4,
    borderBottomWidth: 0.2,
    borderColor: '#cccccc',
    color: COLORS.primaryDark,
  },
  ButtonView: {
    marginTop: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  EditNoteButton: {
    width: '48%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
  },
  EditNoteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
