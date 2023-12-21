import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../themes/Theme';

const CreateClassForm = () => {
  return (
    <>
      <Formik
        initialValues={{subject: '', branch: '', semester: '', section: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.CreateClassForm}>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="book"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Ionicons>
              </View>
              <TextInput
                name="subject"
                style={styles.InputField}
                onChangeText={handleChange('subject')}
                onBlur={handleBlur('subject')}
                value={values.subject}
                keyboardType="default"
                numberOfLines={1}
                placeholder="Subject"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="git-branch"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Ionicons>
              </View>
              <TextInput
                name="branch"
                style={styles.InputField}
                onChangeText={handleChange('branch')}
                onBlur={handleBlur('branch')}
                value={values.branch}
                numberOfLines={1}
                placeholder="Branch"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <MaterialIcons
                  name="subject"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></MaterialIcons>
              </View>
              <TextInput
                name="semester"
                style={styles.InputField}
                onChangeText={handleChange('semester')}
                onBlur={handleBlur('semester')}
                value={values.semester}
                keyboardType='numeric'
                numberOfLines={1}
                placeholder="Semester"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <MaterialIcons
                  name="subject"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></MaterialIcons>
              </View>
              <TextInput
                name="section"
                style={styles.InputField}
                onChangeText={handleChange('section')}
                onBlur={handleBlur('section')}
                value={values.section}
                numberOfLines={1}
                placeholder="Section"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <TouchableOpacity style={styles.CreateClassBtn}>
              <Text style={styles.CreateClassText}>Create</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default CreateClassForm;

const styles = StyleSheet.create({
  CreateClassForm: {
    paddingLeft: SPACING.space_12,
    paddingRight: SPACING.space_12,
  },
  FormField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.space_2,
    paddingBottom: SPACING.space_2,
  },
  FormFieldIonicons: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: SPACING.space_12,
  },
  InputField: {
    flex: 1,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    display: 'flex',
    justifyContent: 'center',
    marginTop: SPACING.space_4,
    borderBottomWidth: 0.2,
    borderColor: '#cccccc',
  },
  CreateClassBtn: {
    width: '100%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_10,
    marginTop: SPACING.space_28,
    borderRadius: 100,
  },
  CreateClassText: {
    color: COLORS.primaryLight,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
});
