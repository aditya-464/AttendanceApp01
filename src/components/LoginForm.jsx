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
import {loginSchema} from './FormValidationSchemas/LoginFormValidationSchema';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = props => {
  const dispatch = useDispatch();
  const {isLoginDone} = props;

  const handleLogin = async values => {
    try {
      const {email, password} = values;
      const login = await auth().signInWithEmailAndPassword(email, password);
      if (login) {
        isLoginDone(true);
        storeAuthDetailsLocally({
          name: login.user.displayName,
          email,
          uid: signup.user.uid,
          password: '12345678',
        });
        dispatch(
          saveAuthDetails({
            name: login.user.displayName,
            email,
            uid: login.user.uid,
            password: '12345678',
          }),
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storeAuthDetailsLocally = async values => {
    try {
      const {name, email, uid, password} = values;
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('uid', uid);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        validationSchema={loginSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleLogin(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView style={styles.LoginForm}>
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
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              disabled={errors.email || errors.password ? true : false}
              onPress={handleSubmit}
              activeOpacity={0.6}
              style={styles.LoginBtn}>
              <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>

            <View style={{marginTop: SPACING.space_15}}>
              {errors.email && (
                <Text style={styles.FormFieldError}>{errors.email}</Text>
              )}
              {errors.password && (
                <Text style={styles.FormFieldError}>{errors.password}</Text>
              )}
            </View>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  LoginForm: {
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
  LoginBtn: {
    width: '100%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_10,
    marginTop: SPACING.space_28,
    borderRadius: 100,
  },
  LoginText: {
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
