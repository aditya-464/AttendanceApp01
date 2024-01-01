import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ViewClassScreenOptionsModal from '../components/ViewClassScreenOptionsModal';
import AddStudentModal from '../components/AddStudentModal';
import RemoveStudentModal from '../components/RemoveStudentModal';
import ViewRecordModal from '../components/ViewRecordModal';
import GenerateReportModal from '../components/GenerateReportModal';
import DeleteClassModal from '../components/DeleteClassModal';
import ImportDataModal from '../components/ImportDataModal';
import SelectDateModal from '../components/SelectDateModal';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

// const StudentDetailsData = [
//   {
//     id: 'item1',
//     roll: 1,
//     name: 'Radhe Shyam',
//     present: 0,
//   },
//   {
//     id: 'item2',
//     roll: 2,
//     name: 'Aditya Giri',
//     present: 0,
//   },
//   {
//     id: 'item3',
//     roll: 3,
//     name: 'Gauri Shankar',
//     present: 0,
//   },
//   {
//     id: 'item4',
//     roll: 4,
//     name: 'Siya Ram',
//     present: 0,
//   },
//   {
//     id: 'item5',
//     roll: 5,
//     name: 'Pinki Giri',
//     present: 0,
//   },

//   {
//     id: 'item6',
//     roll: 1,
//     name: 'Radhe Shyam',
//     present: 0,
//   },
//   {
//     id: 'item7',
//     roll: 2,
//     name: 'Aditya Giri',
//     present: 0,
//   },
//   {
//     id: 'item8',
//     roll: 3,
//     name: 'Gauri Shankar',
//     present: 0,
//   },

//   {
//     id: 'item9',
//     roll: 1,
//     name: 'Radhe Shyam',
//     present: 0,
//   },
//   {
//     id: 'item10',
//     roll: 2,
//     name: 'Aditya Giri',
//     present: 0,
//   },
//   {
//     id: 'item11',
//     roll: 3,
//     name: 'Gauri Shankar',
//     present: 0,
//   },
// ];

const ViewClassScreen = props => {
  const {navigation} = props;
  const [studentsData, setStudentsData] = useState([]);
  const [titleBarHeight, setTitleBarHeight] = useState(null);
  const [optionsModalView, setOptionsModalView] = useState(false);
  const [importDataModalView, setImportDataModalView] = useState(false);
  const [addStudentModalView, setAddStudentModalView] = useState(false);
  const [removeStudentModalView, setRemoveStudentModalView] = useState(false);
  const [viewRecordModalView, setViewRecordModalView] = useState(false);
  const [generateReportModalView, setGenerateReportModalView] = useState(false);
  const [deleteClassModalView, setDeleteClassModalView] = useState(false);
  const [selectDateModalView, setSelectDateModalView] = useState(false);
  const route = useRoute();
  const {refreshClassValue} = useSelector(state => state.refreshClassDetails);

  const onLayoutTitlebar = event => {
    const {height} = event.nativeEvent.layout;
    setTitleBarHeight(height);
  };

  const handleOptionsModal = () => {
    setOptionsModalView(prev => !prev);
  };

  // ImportDataModalView Functions
  const handleOpenImportDataModal = value => {
    setImportDataModalView(value);
  };
  const handleCloseImportDataModal = value => {
    setImportDataModalView(value);
  };

  // AddStudentModalView Functions
  const handleOpenAddStudentModal = value => {
    setAddStudentModalView(value);
  };
  const handleCloseAddStudentModal = value => {
    setAddStudentModalView(value);
  };

  // RemoveStudentModalView Functions
  const handleOpenRemoveStudentModal = value => {
    setRemoveStudentModalView(value);
  };
  const handleCloseRemoveStudentModal = value => {
    setRemoveStudentModalView(value);
  };

  // ViewRecordModalView Functions
  const handleOpenViewRecordModal = value => {
    setViewRecordModalView(value);
  };
  const handleCloseViewRecordModal = value => {
    setViewRecordModalView(value);
  };

  // GenerateReportModalView Functions
  const handleOpenGenerateReportModal = value => {
    setGenerateReportModalView(value);
  };
  const handleCloseGenerateReportModal = value => {
    setGenerateReportModalView(value);
  };

  // DeleteClassModalView Functions
  const handleOpenDeleteClassModal = value => {
    setDeleteClassModalView(value);
  };
  const handleCloseDeleteClassModal = value => {
    setDeleteClassModalView(value);
  };

  // SelectDateModalView Functions
  const handleOpenSelectDateModal = value => {
    setSelectDateModalView(value);
  };
  const handleCloseSelectDateModal = value => {
    setSelectDateModalView(value);
  };

  const getClassDetails = async id => {
    try {
      const classDetails = await firestore()
        .collection('Classes')
        .doc(id)
        .get();
      if (classDetails._data.studentDetails) {
        setStudentsData(classDetails._data.studentDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassDetails(route.params.id);
  }, [refreshClassValue]);

  const handleStudentClick = (id, roll, name, present) => {
    const updatedStudentsData = [];
    for (let i = 0; i < studentsData.length; i++) {
      if (studentsData[i].id !== id) {
        updatedStudentsData.push(studentsData[i]);
      } else {
        updatedStudentsData.push({
          id,
          roll,
          name,
          present: !present,
        });
      }
    }
    setStudentsData(updatedStudentsData);
  };

  const handleResetAttendance = () => {
    const updatedStudentsData = [];
    for (let i = 0; i < studentsData.length; i++) {
      updatedStudentsData.push({
        id: studentsData[i].id,
        roll: studentsData[i].roll,
        name: studentsData[i].name,
        present: 0,
      });
    }
    setStudentsData(updatedStudentsData);
  };

  const FlatListItem = ({id, roll, name, present}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => handleStudentClick(id, roll, name, present)}
      style={[
        styles.StudentDetailsItem,
        {backgroundColor: present ? COLORS.present : COLORS.absent},
      ]}>
      <View style={styles.StudentRoll}>
        <Text style={styles.StudentRollText}>{roll}</Text>
      </View>
      <View style={styles.StudentName}>
        <Text style={styles.StudentNameText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  const NoDataComponent = () => {
    <View style={{marginTop: SPACING.space_15}}>
      <Text
        style={{
          fontFamily: FONTFAMILY.poppins_semibold,
          fontSize: FONTSIZE.size_18,
          color: COLORS.placeholder,
          textAlign: 'center',
        }}>
        No Data Available
      </Text>
    </View>;
  };

  const handleMoveToViewRecordScreen = ({dateAsKey, attendanceBinaryArray}) => {
    navigation.navigate('ViewRecordScreen', {
      initials: route.params.initials,
      branch: route.params.branch,
      semester: route.params.semester,
      section: route.params.section,
      studentsData,
      attendanceBinaryArray,
      dateAsKey,
    });
  };

  const handleMoveToHomeScreen = () => {
    navigation.navigate('HomeScreen');
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
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          activeOpacity={0.6}
          style={styles.BackIcon}>
          <Ionicon
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>
        <View style={styles.TitleTextView}>
          <Text style={[styles.TitleText, {paddingLeft: SPACING.space_8}]}>
            {route.params.initials}
          </Text>
          <Text style={styles.TitleText}>-</Text>
          <Text style={styles.TitleText}>
            {route.params.branch}-{route.params.semester}-{route.params.section}
          </Text>
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
      <ViewClassScreenOptionsModal
        top={titleBarHeight}
        optionsModalView={optionsModalView}
        handleOpenImportDataModal={handleOpenImportDataModal}
        handleOpenAddStudentModal={handleOpenAddStudentModal}
        handleOpenRemoveStudentModal={handleOpenRemoveStudentModal}
        handleOpenViewRecordModal={handleOpenViewRecordModal}
        handleOpenGenerateReportModal={handleOpenGenerateReportModal}
        handleOpenDeleteClassModal={handleOpenDeleteClassModal}
      />
      <ImportDataModal
        handleCloseImportDataModal={handleCloseImportDataModal}
        importDataModalView={importDataModalView}
        id={route.params.id}
      />
      <AddStudentModal
        handleCloseAddStudentModal={handleCloseAddStudentModal}
        addStudentModalView={addStudentModalView}
      />
      <RemoveStudentModal
        handleCloseRemoveStudentModal={handleCloseRemoveStudentModal}
        removeStudentModalView={removeStudentModalView}
      />
      <ViewRecordModal
        handleCloseViewRecordModal={handleCloseViewRecordModal}
        viewRecordModalView={viewRecordModalView}
        id={route.params.id}
        handleMoveToViewRecordScreen={handleMoveToViewRecordScreen}
      />
      <GenerateReportModal
        handleCloseGenerateReportModal={handleCloseGenerateReportModal}
        generateReportModalView={generateReportModalView}
      />
      <DeleteClassModal
        handleCloseDeleteClassModal={handleCloseDeleteClassModal}
        deleteClassModalView={deleteClassModalView}
        id={route.params.id}
        handleMoveToHomeScreen={handleMoveToHomeScreen}
      />
      <SelectDateModal
        handleCloseSelectDateModal={handleCloseSelectDateModal}
        selectDateModalView={selectDateModalView}
        studentsData={studentsData}
        id={route.params.id}
      />
      {
        <>
          <View style={styles.ColumnHeadings}>
            <View style={styles.RollHeading}>
              <Text style={styles.RollHeadingText}>Roll</Text>
            </View>
            <View style={styles.NameHeading}>
              <Text style={styles.NameHeadingText}>Name</Text>
            </View>
          </View>
          {studentsData != [] && (
            <FlatList
              data={studentsData}
              renderItem={({item}) => (
                <FlatListItem
                  id={item.id}
                  roll={item.roll}
                  name={item.name}
                  present={item.present}
                />
              )}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={true}
              ListFooterComponentStyle={{height: 150}}
            />
          )}

          <View style={styles.ActionButtons}>
            <TouchableOpacity
              onPress={handleResetAttendance}
              activeOpacity={0.6}
              style={styles.CancelButton}>
              <Text style={styles.CancelButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOpenSelectDateModal(true)}
              activeOpacity={0.6}
              style={styles.SubmitButton}>
              <Text style={styles.SubmitButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </SafeAreaView>
  );
};

export default ViewClassScreen;

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
  ColumnHeadings: {
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  RollHeading: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  RollHeadingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
  },
  NameHeading: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  NameHeadingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryDark,
  },
  StudentDetailsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_12,
    borderBottomWidth: 0.3,
    borderColor: COLORS.primaryLight,
  },
  StudentRoll: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StudentRollText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryDark,
  },
  StudentName: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StudentNameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryDark,
  },
  ActionButtons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.space_20,
    zIndex: 10,
    backgroundColor: COLORS.primaryLight,
  },
  CancelButton: {
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
    backgroundColor: COLORS.primaryLight,
  },
  CancelButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  SubmitButton: {
    width: '48%',
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderRadius: 50,
    backgroundColor: COLORS.primaryDark,
  },
  SubmitButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
