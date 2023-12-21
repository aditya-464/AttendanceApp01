import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import LoginForm from '../components/LoginForm';

const LoginScreen = props => {
  const {navigation} = props;
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
      <View style={styles.SignupOption}>
        <TouchableOpacity disabled={true}>
          <Text style={styles.SignupText}>Don't have an Account? </Text>
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.Signup}>Signup</Text>
        </TouchableOpacity>
      </View>
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
  SignupOption: {
    paddingBottom: SPACING.space_20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDark,
  },
  Signup: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryDark,
    marginHorizontal: SPACING.space_2,
  },
});
