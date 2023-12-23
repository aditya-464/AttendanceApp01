import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';

const ViewClassScreenOptionsModal = () => {
  return (
    <View style={styles.OptionsModal}>
      <TouchableOpacity activeOpacity={0.4} style={styles.AddStudent}>
        <Text style={styles.AddStudentText}>Add Student</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.RemoveStudent}>
        <Text style={styles.RemoveStudentText}>Remove Student</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.ViewRecord}>
        <Text style={styles.ViewRecordText}>View Record</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4} style={styles.GenerateReport}>
        <Text style={styles.GenerateReportText}>Generate Report</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewClassScreenOptionsModal;

const styles = StyleSheet.create({
  OptionsModal: {
    width: '50%',
    padding: SPACING.space_8,
    elevation: 2,
    borderRadius : BORDERRADIUS.radius_10,
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
});
