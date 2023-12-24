import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';

const ViewNoteScreenOptionsModal = props => {
  const {top, modalView} = props;

  return (
    <View
      style={[
        styles.OptionsModal,
        {top: top, display: modalView ? 'flex' : 'flex'},
      ]}>
      <TouchableOpacity activeOpacity={0.4} style={styles.EditNote}>
        <Text style={styles.EditNoteText}>Edit Note</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.DeleteNote}>
        <Text style={styles.DeleteNoteText}>Delete Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewNoteScreenOptionsModal;

const styles = StyleSheet.create({
  OptionsModal: {
    width: '50%',
    flexDirection: 'column',
    padding: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryLight,
    position: 'absolute',
    right: SPACING.space_12,
    zIndex: 10,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  EditNote: {
    padding: SPACING.space_8,
  },
  EditNoteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  DeleteNote: {
    padding: SPACING.space_8,
  },
  DeleteNoteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
});
