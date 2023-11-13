import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import SignupForm from '../components/SignupForm';

const SignupScreen = () => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={styles.SignupContainer}>
        <Text style={styles.SignupText}>Create Account</Text>
        <SignupForm></SignupForm>
      </View>
      <Text style={styles.LoginText}>
        Already have an Account? <Text> </Text>
        <Text style={styles.Login}>Login</Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  SignupContainer: {
    paddingHorizontal: SPACING.space_12,
  },
  SignupText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_12,
  },
  LoginText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
    paddingBottom: SPACING.space_20,
  },
  Login: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
    paddingHorizontal: SPACING.space_10,
  },
});
