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
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';

const CreateNoteForm = () => {
  return (
    <>
      <Formik
        initialValues={{subject: '', content: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.CreateNoteForm}>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="information-circle"
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
                <MaterialIcons
                  name="message"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></MaterialIcons>
              </View>
              <TextInput
                name="content"
                style={styles.InputField}
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                numberOfLines={1}
                placeholder="Content"
                placeholderTextColor={COLORS.placeholder}
                multiline
              />
            </View>

            <TouchableOpacity style={styles.CreateNoteBtn}>
              <Text style={styles.CreateNoteText}>Create</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default CreateNoteForm;

const styles = StyleSheet.create({
  CreateNoteForm: {
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
  CreateNoteBtn: {
    width: '100%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_10,
    marginTop: SPACING.space_28,
    borderRadius: 100,
  },
  CreateNoteText: {
    color: COLORS.primaryLight,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
});
