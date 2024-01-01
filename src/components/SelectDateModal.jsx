import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {refreshClassDetailsFunc} from '../redux/refreshViewClassScreen';

const SelectDateModal = props => {
  const {handleCloseSelectDateModal, selectDateModalView, studentsData, id} =
    props;
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [attendanceBinaryArray, setAttendanceBinaryArray] = useState([]);
  const [previousTotalAttendance, setPreviousTotalAttendance] = useState([]);

  const getNewTotalAttendance = subtractData => {
    const tempArray = [];
    if (subtractData == null) {
      for (let i = 0; i < previousTotalAttendance.length; i++) {
        tempArray.push(previousTotalAttendance[i] + attendanceBinaryArray[i]);
      }
    } else {
      for (let i = 0; i < previousTotalAttendance.length; i++) {
        tempArray.push(
          previousTotalAttendance[i] -
            subtractData[i] +
            attendanceBinaryArray[i],
        );
      }
    }
    return tempArray;
  };

  const submitAttendance = async () => {
    try {
      const dateAsKey = '' + date + '-' + month + '-' + year;
      if (previousTotalAttendance.length === 0) {
        const updateTotalAttendace = await firestore()
          .collection('Classes')
          .doc(id)
          .set(
            {
              totalAttendance: attendanceBinaryArray,
            },
            {merge: true},
          );

        const setAttendance = await firestore()
          .collection('Attendance')
          .doc(id)
          .set(
            {
              [dateAsKey]: attendanceBinaryArray,
            },
            {merge: true},
          );
      } else {
        const attendanceDetails = await firestore()
          .collection('Attendance')
          .doc(id)
          .get();

        if (attendanceDetails) {
          if (attendanceDetails._data[dateAsKey]) {
            const newTotalAttendanceArray = getNewTotalAttendance(
              attendanceDetails._data[dateAsKey],
            );
            const updateTotalAttendace = await firestore()
              .collection('Classes')
              .doc(id)
              .set(
                {
                  totalAttendance: newTotalAttendanceArray,
                },
                {merge: true},
              );

            const markAttendance = await firestore()
              .collection('Attendance')
              .doc(id)
              .set(
                {
                  [dateAsKey]: attendanceBinaryArray,
                },
                {merge: true},
              );
          } else {
            const newTotalAttendanceArray = getNewTotalAttendance(null);
            const updateTotalAttendace = await firestore()
              .collection('Classes')
              .doc(id)
              .set(
                {
                  totalAttendance: newTotalAttendanceArray,
                },
                {merge: true},
              );

            const markAttendance = await firestore()
              .collection('Attendance')
              .doc(id)
              .set(
                {
                  [dateAsKey]: attendanceBinaryArray,
                },
                {merge: true},
              );
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAttendanceBinaryArray = studentsData => {
    const tempArray = [];
    for (let i = 0; i < studentsData.length; i++) {
      if (studentsData[i].present) {
        tempArray.push(1);
      } else {
        tempArray.push(0);
      }
    }
    setAttendanceBinaryArray(tempArray);
  };

  const getPreviousTotalAttendance = async () => {
    try {
      const classDetails = await firestore()
        .collection('Classes')
        .doc(id)
        .get();
      if (classDetails) {
        setPreviousTotalAttendance(classDetails._data.totalAttendance);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPreviousTotalAttendance();
    getAttendanceBinaryArray(studentsData);
  }, [studentsData]);

  return (
    <SafeAreaView>
      <Modal useNativeDriver={true} isVisible={selectDateModalView}>
        <View
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={styles.SelectDateModal}>
            <View style={styles.CloseModal}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.CloseModalButton}
                onPress={() => handleCloseSelectDateModal(false)}>
                <Ionicons
                  name="close"
                  size={FONTSIZE.size_30}
                  color={COLORS.primaryDark}></Ionicons>
              </TouchableOpacity>
            </View>
            <Text style={styles.SelectDateTitle}>Enter Date</Text>
            {/* <Text style={styles.SelectDateTextInfo}>
              Select the date for marking attendance
            </Text> */}
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
                onPress={() => {
                  handleCloseSelectDateModal(false);
                  submitAttendance();
                }}
                activeOpacity={0.6}
                style={styles.SelectDateButton}>
                <Text style={styles.SelectDateText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SelectDateModal;

const styles = StyleSheet.create({
  SelectDateModal: {
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
  SelectDateTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryDark,
  },
  SelectDateTextInfo: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    marginVertical: SPACING.space_12,
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
  SelectDateButton: {
    width: '48%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
  },
  SelectDateText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
