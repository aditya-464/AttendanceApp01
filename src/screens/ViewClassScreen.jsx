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

const StudentDetailsData = [
  {
    id: 'item1',
    roll: 1,
    name: 'Radhe Shyam',
    present: 0,
  },
  {
    id: 'item2',
    roll: 2,
    name: 'Aditya Giri',
    present: 0,
  },
  {
    id: 'item3',
    roll: 3,
    name: 'Gauri Shankar',
    present: 0,
  },
  {
    id: 'item4',
    roll: 4,
    name: 'Siya Ram',
    present: 0,
  },
  {
    id: 'item5',
    roll: 5,
    name: 'Pinki Giri',
    present: 0,
  },
];

const ViewClassScreen = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const newStudentsData = StudentDetailsData.map(object => ({
      id: object.id,
      roll: object.roll,
      name: object.name,
      present: object.present,
    }));

    setStudentsData(newStudentsData);
  }, []);

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
          present : !present,
        });
      }
      setStudentsData(updatedStudentsData);
    }
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

  return (
    <SafeAreaView>
      <View style={styles.TitleBar}>
        <View style={styles.BackIcon}>
          <Ionicon
            name="chevron-back"
            size={FONTSIZE.size_28}
            color={COLORS.primaryDark}
          />
        </View>
        <View style={styles.TitleTextView}>
          <Text style={[styles.TitleText, {paddingLeft: SPACING.space_8}]}>
            OS
          </Text>
          <Text style={styles.TitleText}>-</Text>
          <Text style={styles.TitleText}>IT-5-C</Text>
        </View>
        <View style={styles.OptionsIcon}>
          <SimpleLineIcons
            name="options-vertical"
            size={22}
            color={COLORS.primaryDark}></SimpleLineIcons>
        </View>
      </View>
      <View style={styles.ColumnHeadings}>
        <View style={styles.RollHeading}>
          <Text style={styles.RollHeadingText}>Roll</Text>
        </View>
        <View style={styles.NameHeading}>
          <Text style={styles.NameHeadingText}>Name</Text>
        </View>
      </View>
      {studentsData && (
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
          keyExtractor={item => item.id}
          scrollEnabled={true}
          ListFooterComponentStyle={{height: 200}}
          ListFooterComponent={<View></View>}
        />
      )}
      <View style={styles.ActionButtons}></View>
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
  },
  StudentRollText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  StudentName: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  StudentNameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  ActionButtons: {},
});
