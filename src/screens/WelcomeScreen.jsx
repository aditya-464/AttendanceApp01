import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import WelcomeImg from '../assets/images/welcome.jpg';
import React from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';

const WelcomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <ImageBackground
          source={WelcomeImg}
          resizeMode="cover"
          style={styles.BgImageContainer}>
          <View style={styles.InfoContainer}>
            <View>
              <Text style={styles.WelcomeText}>Welcome!</Text>
              <Text style={styles.InfoText}>
                One stop solution for maintaining attendance records and taking
                notes
              </Text>
            </View>
            <View style={styles.BtnContainer}>
              <TouchableOpacity style={styles.SignupBtn}>
                <Text style={styles.SignupText}>Signup</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.LoginBtn}>
                <Text style={styles.LoginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  BgImageContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  InfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: Dimensions.get('window').width,
    padding: SPACING.space_12,
    paddingBottom: SPACING.space_32,
    backgroundColor: COLORS.primaryLight,
  },
  WelcomeText: {
    color: COLORS.primaryDark,
    fontSize: FONTSIZE.size_30,
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingTop: SPACING.space_10,
  },
  InfoText: {
    color: COLORS.primaryDark,
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.poppins_regular,
    paddingBottom: SPACING.space_20,
  },
  BtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.space_20,
  },
  SignupBtn: {
    width: '48%',
    padding: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: 100,
  },
  SignupText: {
    color: COLORS.primaryDark,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
  },
  LoginBtn: {
    width: '48%',
    padding: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: 100,
    backgroundColor: COLORS.primaryDark,
  },
  LoginText: {
    color: COLORS.primaryLight,
    textAlign: 'center',
    fontSize: FONTSIZE.size_18,
  },
});
