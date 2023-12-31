import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import auth from '@react-native-firebase/auth';
import {signupSchema} from './FormValidationSchemas/SignupFormValidationSchema';
import {useDispatch} from 'react-redux';
import {saveAuthDetails} from '../redux/auth';

const SignupForm = props => {
  const {isSignupDone} = props;
  const dispatch = useDispatch();

  const handleSignup = async values => {
    try {
      const {name, email, password} = values;
      const signup = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await signup.user.updateProfile({
        displayName: name,
      });
      if (signup) {
        dispatch(
          saveAuthDetails({
            name,
            email,
            uid: signup.user.uid,
            password: '12345678910',
          }),
        );
        isSignupDone(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Formik
        validationSchema={signupSchema}
        initialValues={{name: '', email: '', password: '', confirmPassword: ''}}
        onSubmit={values => handleSignup(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView style={styles.SignupForm}>
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
                maxLength={20}
                placeholder="Password"
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry={true}
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
                maxLength={20}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              disabled={
                errors.name ||
                errors.email ||
                errors.password ||
                errors.confirmPassword
                  ? true
                  : false
              }
              onPress={handleSubmit}
              activeOpacity={0.6}
              style={styles.SignupBtn}>
              <Text style={styles.SignupText}>Signup</Text>
            </TouchableOpacity>

            <View style={{marginTop: SPACING.space_15}}>
              {errors.name && (
                <Text style={styles.FormFieldError}>{errors.name}</Text>
              )}
              {errors.email && (
                <Text style={styles.FormFieldError}>{errors.email}</Text>
              )}
              {errors.password && (
                <Text style={styles.FormFieldError}>{errors.password}</Text>
              )}
              {errors.confirmPassword && (
                <Text style={styles.FormFieldError}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
          </ScrollView>
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
  FormFieldError: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.absent,
  },
});
