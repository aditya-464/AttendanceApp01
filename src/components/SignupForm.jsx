import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.SignupForm}>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="person-outline"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Ionicons>
              </View>
              <TextInput
                name="name"
                style={styles.InputField}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                numberOfLines={1}
                placeholder="Name"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Fontisto
                  name="email"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Fontisto>
              </View>
              <TextInput
                name="email"
                style={styles.InputField}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                numberOfLines={1}
                placeholder="Email"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="lock-open-outline"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Ionicons>
              </View>
              <TextInput
                name="password"
                style={styles.InputField}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                numberOfLines={1}
                placeholder="Password"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>
            <View style={styles.FormField}>
              <View style={styles.FormFieldIonicons}>
                <Ionicons
                  name="lock-open-outline"
                  size={FONTSIZE.size_24}
                  color={COLORS.placeholder}></Ionicons>
              </View>
              <TextInput
                name="confirmPassword"
                style={styles.InputField}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                numberOfLines={1}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <TouchableOpacity activeOpacity={0.6} style={styles.SignupBtn}>
              <Text style={styles.SignupText}>Signup</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  SignupForm: {
    paddingLeft: SPACING.space_12,
    paddingRight: SPACING.space_12,
    backgroundColor: COLORS.primaryLight,
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
  SignupBtn: {
    width: '100%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_10,
    marginTop: SPACING.space_28,
    borderRadius: 100,
  },
  SignupText: {
    color: COLORS.primaryLight,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
});
