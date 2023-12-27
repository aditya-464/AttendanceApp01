import {
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
import Modal from 'react-native-modal';

const DeleteNoteModal = props => {
  const {handleCloseDeleteNoteModalView, deleteNoteModalView} = props;

  return (
    <SafeAreaView>
      <Modal useNativeDriver={true} isVisible={deleteNoteModalView}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={styles.DeleteNoteModal}>
            <View style={styles.CloseModal}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.CloseModalButton}
                onPress={() => handleCloseDeleteNoteModalView(false)}>
                <Ionicons
                  name="close"
                  size={FONTSIZE.size_30}
                  color={COLORS.primaryDark}></Ionicons>
              </TouchableOpacity>
            </View>
            <Text style={styles.DeleteNoteTitle}>Delete Note</Text>
            <Text style={styles.DeleteNoteTextInfo}>
              Are you certain you wish to delete this Note?
            </Text>
            <View style={styles.ButtonView}>
              <TouchableOpacity activeOpacity={0.6} style={styles.CancelButton}>
                <Text style={styles.CancelText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.DeleteNoteButton}>
                <Text style={styles.DeleteNoteText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DeleteNoteModal;

const styles = StyleSheet.create({
  DeleteNoteModal: {
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
  DeleteNoteTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
  },
  DeleteNoteTextInfo: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginVertical: SPACING.space_12,
  },
  ButtonView: {
    marginTop: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CancelButton: {
    width: '48%',
    backgroundColor: COLORS.primaryLight,
    padding: SPACING.space_12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
  },
  CancelText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  DeleteNoteButton: {
    width: '48%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
  },
  DeleteNoteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
