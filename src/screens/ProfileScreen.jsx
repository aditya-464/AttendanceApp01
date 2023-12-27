import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../themes/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const [name, setName] = useState('Radhe Shyam');
  const [email, setEmail] = useState('adityagiri1911@gmail.com');
  const [password, setPassword] = useState('JaiShreeRadhe');
  const [showUpdateAndCancelButtons, setShowUpdateAndCancelButtons] =
    useState(false);

  return (
    <SafeAreaView>
      <View style={styles.TitleBar}>
        <View style={styles.Title}>
          <Text style={styles.TitleText}>Profile</Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.Menu}>
          <Ionicons
            name="menu"
            size={FONTSIZE.size_30}
            color={COLORS.primaryDark}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.ProfileContent}>
        <Text style={styles.PlaceholderText}>Name</Text>
        <TextInput
          autoCorrect={false}
          style={styles.Name}
          editable={showUpdateAndCancelButtons}
          value={name}
          onChangeText={text => setName(text)}></TextInput>
        <Text style={styles.PlaceholderText}>Email</Text>
        <TextInput
          autoCorrect={false}
          style={styles.Email}
          editable={showUpdateAndCancelButtons}
          value={email}
          onChangeText={text => setEmail(text)}></TextInput>
        <Text style={styles.PlaceholderText}>Password</Text>
        <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.Password}
          editable={showUpdateAndCancelButtons}
          value={password}
          onChangeText={text => setPassword(text)}></TextInput>

        {!showUpdateAndCancelButtons && (
          <View style={styles.ActionButtons}>
            <TouchableOpacity
              onPress={() => setShowUpdateAndCancelButtons(prev => !prev)}
              activeOpacity={0.6}
              style={styles.EditButton}>
              <Text style={styles.EditButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        )}
        {showUpdateAndCancelButtons && (
          <View style={styles.ActionButtons}>
            <TouchableOpacity
              onPress={() => setShowUpdateAndCancelButtons(prev => !prev)}
              activeOpacity={0.6}
              style={styles.CancelButton}>
              <Text style={styles.CancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowUpdateAndCancelButtons(prev => !prev)}
              activeOpacity={0.6}
              style={styles.UpdateButton}>
              <Text style={styles.UpdateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
  ProfileContent: {
    paddingHorizontal: SPACING.space_16,
    paddingTop: SPACING.space_4,
  },
  PlaceholderText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.placeholder,
    marginBottom: SPACING.space_4,
  },
  Name: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: BORDERRADIUS.radius_4,
    marginBottom: SPACING.space_18,
  },
  Email: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: BORDERRADIUS.radius_4,
    marginBottom: SPACING.space_18,
  },
  Password: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    padding: SPACING.space_12,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: BORDERRADIUS.radius_4,
    marginBottom: SPACING.space_18,
  },
  ActionButtons: {
    marginTop: SPACING.space_24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  EditButton: {
    width: '100%',
    padding: SPACING.space_12,
    backgroundColor: COLORS.primaryDark,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: 50,
  },
  EditButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
  CancelButton: {
    width: '48%',
    padding: SPACING.space_12,
    backgroundColor: COLORS.primaryLight,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: 50,
  },
  CancelButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryDark,
    textAlign: 'center',
  },
  UpdateButton: {
    width: '48%',
    padding: SPACING.space_12,
    backgroundColor: COLORS.primaryDark,
    borderWidth: 1,
    borderColor: COLORS.primaryDark,
    borderRadius: 50,
  },
  UpdateButtonText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLight,
    textAlign: 'center',
  },
});
