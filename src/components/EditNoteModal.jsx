import {
  ActivityIndicator,
  Keyboard,
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
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {refreshNotesDetails} from '../redux/refreshNotesScreen';

const EditNoteModal = props => {
  const {handleCloseEditNoteModalView, editNoteModalView, id} = props;
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const {uid} = useSelector(state => state.authDetails);
  const dispatch = useDispatch();

  const handleEditNote = async () => {
    try {
      console.log(subject);
      console.log(content);
      if (subject === '' || content === '') {
        setError('All Fields Are Required');
        setShowLoader(false);
      } else {
        setShowLoader(true);
        const userDetails = await firestore()
          .collection('Users')
          .doc(uid)
          .get();

        const updateContent = await firestore()
          .collection('Notes')
          .doc(id)
          .set({
            content: content,
          });

        if (userDetails) {
          let oldNotesArray = userDetails._data.notes;
          for (let i = 0; i < oldNotesArray.length; i++) {
            if (oldNotesArray[i].id === id) {
              oldNotesArray[i].subject = subject;
            }
          }

          firestore()
            .collection('Users')
            .doc(uid)
            .set(
              {
                notes: oldNotesArray,
              },
              {merge: true},
            )
            .then(() => {
              dispatch(refreshNotesDetails());
              setShowLoader(false);
              setSuccess('Note Edited');
              setError(null);

              setTimeout(() => {
                handleCloseEditNoteModalView(false);
                setSuccess(null);
                setContent('');
                setSubject('');
              }, 3000);
            });
        }
      }
    } catch (error) {
      console.log(error);
      setError(error);
      showLoader(false);
      setSuccess(null);
    }
  };

  return (
    <SafeAreaView>
      <Modal
        useNativeDriver={true}
        isVisible={editNoteModalView}
        animationIn={'fadeInUp'}
        animationOut={'fadeOutDown'}>
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
                onPress={() => {
                  handleCloseEditNoteModalView(false);
                  setSubject('');
                  setContent('');
                  setError(null);
                  setSuccess(null);
                  setShowLoader(false);
                }}>
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
              numberOfLines={1}
              onChangeText={text => setContent(text)}></TextInput>

            <View style={styles.ButtonView}>
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  handleEditNote();
                }}
                activeOpacity={0.6}
                style={styles.EditNoteButton}>
                {!showLoader && <Text style={styles.EditNoteText}>Edit</Text>}
                {showLoader && (
                  <ActivityIndicator
                    size={26}
                    color={COLORS.primaryLight}
                    animating={showLoader}
                  />
                )}
              </TouchableOpacity>
            </View>

            {success === null && error === null && (
              <Text style={styles.DummyText}>-</Text>
            )}
            {error && <Text style={styles.ErrorText}>{error}</Text>}
            {success && <Text style={styles.SuccessText}>{success}</Text>}
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
  DummyText: {
    marginTop: SPACING.space_10,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryLight,
  },
  ErrorText: {
    marginTop: SPACING.space_10,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.absent,
  },
  SuccessText: {
    marginTop: SPACING.space_10,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.present,
  },
});
