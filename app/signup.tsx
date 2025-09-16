import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Header from './components/Header';
import BackButton from './components/BackButton';
import { GlobalStyles } from '../styles/globalStyles';
import { Colors, Typography, Spacing, BorderRadius } from '../styles/theme';

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleNextPress = () => {
    // Since we're not connected to a DB, route back to auth screen
    router.push('/auth');
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={[GlobalStyles.container, styles.signupContainer]}>
      <BackButton />
      
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>
              To link your subscription or save a story, you must first create an account.
            </Text>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={[
                styles.input,
                emailFocused && styles.inputFocused
              ]}
              placeholder="Email address"
              placeholderTextColor={Colors.textTertiary}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.passwordInput,
                  passwordFocused && styles.inputFocused
                ]}
                placeholder="Password"
                placeholderTextColor={Colors.textTertiary}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                secureTextEntry={!showPassword}
                autoComplete="password"
              />
              <TouchableOpacity 
                style={styles.showButton}
                onPress={togglePasswordVisibility}
                activeOpacity={0.7}
              >
                <Text style={styles.showButtonText}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.passwordRequirement}>
              Password must be at least 8 characters
            </Text>
          </View>


          <TouchableOpacity 
            style={[
              styles.nextButton,
              email.trim() && password.trim() && styles.nextButtonActive
            ]} 
            onPress={handleNextPress}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.nextButtonText,
              email.trim() && password.trim() && styles.nextButtonTextActive
            ]}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
  },
  formContainer: {
    width: '100%',
  },
  titleContainer: {
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: Typography.title1,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: Typography.body,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: Spacing.lg,
  },
  inputLabel: {
    fontSize: Typography.subhead,
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
    fontWeight: Typography.medium,
  },
  input: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    fontSize: Typography.body,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.separator,
    minHeight: 56,
  },
  inputFocused: {
    borderColor: Colors.primary,
    backgroundColor: Colors.backgroundTertiary,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
    paddingRight: 80,
    fontSize: Typography.body,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.separator,
    minHeight: 56,
  },
  showButton: {
    position: 'absolute',
    right: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  showButtonText: {
    fontSize: Typography.body,
    color: Colors.danger,
    fontWeight: Typography.regular,
  },
  passwordRequirement: {
    fontSize: Typography.footnote,
    color: Colors.textSecondary,
    marginTop: Spacing.sm,
  },
  nextButton: {
    backgroundColor: Colors.systemGray3,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    marginTop: Spacing.lg,
  },
  nextButtonText: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: Colors.textSecondary,
  },
  nextButtonActive: {
    backgroundColor: '#0077b6',
  },
  nextButtonTextActive: {
    color: '#FFFFFF',
  },
});
