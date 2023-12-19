import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import SignupForm from '../components/SignupForm';

const SignupScreen = props => {
  const {navigation} = props;
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
      <View style={styles.LoginOption}>
        <TouchableOpacity disabled={true}>
          <Text style={styles.LoginText}>Don't have an Account? </Text>
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.Login}>Login</Text>
        </TouchableOpacity>
      </View>
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
  LoginOption: {
    paddingBottom: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  Login: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
    marginHorizontal: SPACING.space_2,
  },
});
