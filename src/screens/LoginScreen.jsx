import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={styles.LoginContainer}>
        <Text style={styles.LoginText}>Hello User!</Text>
        <LoginForm></LoginForm>
      </View>
      <Text style={styles.SignupText}>
        Don't have an Account? <Text> </Text>
        <Text style={styles.Signup}>Signup</Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    paddingHorizontal: SPACING.space_12,
  },
  LoginText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_12,
  },
  SignupText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    paddingBottom: SPACING.space_20,
  },
  Signup: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
    paddingHorizontal: SPACING.space_10,
  },
});
