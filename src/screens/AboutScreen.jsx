import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AboutScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.TitleBar}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>About</Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.Menu}>
          <Ionicons
            name="menu"
            size={FONTSIZE.size_30}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.AboutContent}>
        <Text style={styles.AppInfoText}>
          Applixe is a sleek attendance management application developed with
          React Native and Firebase. It offers seamless cross-platform
          experience, ensuring efficient attendance tracking for students.
        </Text>
        <Text style={styles.DevelopedByText}>Developer Info :- </Text>
        <Text style={styles.MyNameText}>Aditya Giri</Text>
        <Text style={styles.MyEmailText}>adityagiri1911@gmail.com</Text>
        <Text style={styles.CollegeInfoText}>IT Dept. of NSEC</Text>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  TitleBar: {
    width: '100%',
    paddingHorizontal: SPACING.space_12,
    paddingVertical: SPACING.space_8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    width: '80%',
  },
  TitleText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_30,
    color: COLORS.primaryDark,
  },
  Menu: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING.space_4,
  },
  AboutContent: {
    padding: SPACING.space_12,
  },
  AppInfoText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
  },
  DevelopedByText: {
    marginTop: SPACING.space_30,
    marginBottom : SPACING.space_12,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity : 0.9,
  },
  MyNameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity : 0.9,
  },
  MyEmailText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity : 0.9,
  },
  CollegeInfoText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    opacity : 0.9,
  },
});
