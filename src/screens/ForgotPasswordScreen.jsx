import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../themes/Theme';
import {Formik} from 'formik';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {forgetPasswordSchema} from '../components/FormValidationSchemas/ForgetPasswordValidationSchema';

const ForgotPasswordScreen = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);

  const handleForgotPassword = () => {};

  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: COLORS.primaryLight,
      }}>
      <View style={styles.ForgotPasswordScreenContainer}>
        <Text style={styles.ForgotPasswordScreenText}>Forgot Password?</Text>
      </View>

      <View style={styles.ForgotPasswordScreenContent}>
        <Formik
          validationSchema={forgetPasswordSchema}
          initialValues={{email: ''}}
          onSubmit={values => handleForgotPassword(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <ScrollView style={styles.ForgotPasswordForm}>
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

              <TouchableOpacity
                disabled={errors.email || values.email === '' ? true : false}
                onPress={() => {
                  handleSubmit();
                  setShowLoader(true);
                  setError(null);
                }}
                activeOpacity={0.6}
                style={styles.ForgotPasswordBtn}>
                {!showLoader && (
                  <Text style={styles.ForgotPasswordText}>Submit</Text>
                )}
                {showLoader && (
                  <ActivityIndicator
                    animating={showLoader}
                    size={26}
                    color={COLORS.primaryLight}
                  />
                )}
              </TouchableOpacity>

              <View style={{marginTop: SPACING.space_15}}>
                {error && <Text style={styles.FormFieldError}>{error}</Text>}
                {errors.email && (
                  <Text style={styles.FormFieldError}>{errors.email}</Text>
                )}
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  ForgotPasswordScreenContainer: {
    paddingHorizontal: SPACING.space_12,
  },
  ForgotPasswordScreenText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_28,
    marginVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_12,
    color: COLORS.primaryDark,
    opacity: 0.9,
  },
  ForgotPasswordForm: {
    paddingHorizontal: SPACING.space_24,
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
  PasswordIconButton: {
    paddingHorizontal: SPACING.space_12,
  },
  ForgotPasswordBtn: {
    width: '100%',
    backgroundColor: COLORS.primaryDark,
    padding: SPACING.space_10,
    marginTop: SPACING.space_28,
    borderRadius: 100,
  },
  ForgotPasswordText: {
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
