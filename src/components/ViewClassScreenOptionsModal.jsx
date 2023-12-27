import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';

const ViewClassScreenOptionsModal = props => {
  const {
    top,
    optionsModalView,
    handleOpenAddStudentModal,
    handleOpenRemoveStudentModal,
    handleOpenViewRecordModal,
    handleOpenGenerateReportModal,
    handleOpenDeleteClassModal,
  } = props;

  return (
    <View
      style={[
        styles.OptionsModal,
        {top: top, display: optionsModalView ? 'flex' : 'none'},
      ]}>
      <TouchableOpacity activeOpacity={0.4} style={styles.ImportData}>
        <Text style={styles.ImportDataText}>Import Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenAddStudentModal(true)}
        activeOpacity={0.4}
        style={styles.AddStudent}>
        <Text style={styles.AddStudentText}>Add Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenRemoveStudentModal(true)}
        activeOpacity={0.4}
        style={styles.RemoveStudent}>
        <Text style={styles.RemoveStudentText}>Remove Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenViewRecordModal(true)}
        activeOpacity={0.4}
        style={styles.ViewRecord}>
        <Text style={styles.ViewRecordText}>View Record</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenGenerateReportModal(true)}
        activeOpacity={0.4}
        style={styles.GenerateReport}>
        <Text style={styles.GenerateReportText}>Generate Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleOpenDeleteClassModal(true)}
        activeOpacity={0.4}
        style={styles.DeleteClass}>
        <Text style={styles.DeleteClassText}>Delete Class</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewClassScreenOptionsModal;

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
  ImportData: {
    padding: SPACING.space_8,
  },
  ImportDataText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  AddStudent: {
    padding: SPACING.space_8,
  },
  AddStudentText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  RemoveStudent: {
    padding: SPACING.space_8,
  },
  RemoveStudentText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  ViewRecord: {
    padding: SPACING.space_8,
  },
  ViewRecordText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  GenerateReport: {
    padding: SPACING.space_8,
  },
  GenerateReportText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  DeleteClass: {
    padding: SPACING.space_8,
  },
  DeleteClassText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
});
