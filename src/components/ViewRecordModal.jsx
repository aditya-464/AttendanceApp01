import {
  Platform,
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

const ViewRecordModal = props => {
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const {handleCloseViewRecordModal, viewRecordModalView} = props;

  return (
    <SafeAreaView>
      <Modal useNativeDriver={true} isVisible={viewRecordModalView}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={styles.ViewRecordModal}>
            <View style={styles.CloseModal}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.CloseModalButton}
                onPress={() => handleCloseViewRecordModal(false)}>
                <Ionicons
                  name="close"
                  size={FONTSIZE.size_30}
                  color={COLORS.primaryDark}></Ionicons>
              </TouchableOpacity>
            </View>
            <Text style={styles.AddStudentTitle}>View Record</Text>
            <View style={styles.DateInputFields}>
              <TextInput
                style={styles.InputField}
                placeholder="DD"
                placeholderTextColor={COLORS.placeholder}
                maxLength={2}
                value={date}
                onChangeText={text => setDate(text)}
                keyboardType="numeric"></TextInput>
              <Text style={{marginHorizontal: SPACING.space_8}}>/</Text>
              <TextInput
                style={styles.InputField}
                placeholder="MM"
                placeholderTextColor={COLORS.placeholder}
                maxLength={2}
                value={month}
                onChangeText={text => setMonth(text)}
                keyboardType="numeric"></TextInput>
              <Text style={{marginHorizontal: SPACING.space_8}}>/</Text>
              <TextInput
                style={styles.InputField}
                placeholder="YYYY"
                placeholderTextColor={COLORS.placeholder}
                maxLength={4}
                value={year}
                onChangeText={text => setYear(text)}
                keyboardType="numeric"></TextInput>
            </View>
            <View style={styles.ButtonView}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ViewRecordButton}>
                <Text style={styles.ViewRecordText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ViewRecordModal;

const styles = StyleSheet.create({
  ViewRecordModal: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: BORDERRADIUS.radius_10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: Platform.OS === 'android' ? 5 : 0,
    padding: SPACING.space_16,
  },
  CloseModal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  CloseModalButton: {},
  AddStudentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
  },
  DateInputFields: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  InputField: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_4,
    borderBottomWidth: 0.2,
    borderColor: '#cccccc',
    color: COLORS.primaryDark,
    minWidth: 40,
    textAlign: 'center',
  },
  ButtonView: {
    marginTop: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ViewRecordButton: {
    width: '50%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
  },
  ViewRecordText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
