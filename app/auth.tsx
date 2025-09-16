import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Header from './components/Header';
import BackButton from './components/BackButton';
import { GlobalStyles } from '../styles/globalStyles';
import { Colors, Typography, Spacing, BorderRadius } from '../styles/theme';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLoginPress = () => {
    router.push('/home');
  };

  const handleSignUpPress = () => {
    router.push('/signup');
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView style={[GlobalStyles.container, styles.authContainer]}>
      <Header title="Log In" />
      <BackButton />
      
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Log in or sign up</Text>
            <Text style={styles.subtitle}>Sign in or create an account now to start tracking your monthly expenses!</Text>
          </View>
          
          <View style={styles.inputContainer}>
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
            <TextInput
              style={[
                styles.input,
                passwordFocused && styles.inputFocused
              ]}
              placeholder="Password"
              placeholderTextColor={Colors.textTertiary}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              secureTextEntry
              autoComplete="password"
            />
          </View>

          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={handleForgotPassword}
            activeOpacity={0.7}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[
                styles.loginButton,
                email.trim() && password.trim() && styles.loginButtonActive
              ]} 
              onPress={handleLoginPress}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.loginButtonText,
                email.trim() && password.trim() && styles.loginButtonTextActive
              ]}>Log in</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.signUpButton} 
              onPress={handleSignUpPress}
              activeOpacity={0.8}
            >
              <Text style={styles.signUpButtonText}>Sign up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: Spacing.md,
  },
  titleContainer: {
    marginBottom: Spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.title1,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: Spacing.md,
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
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginBottom: Spacing.xl,
    marginTop: Spacing.sm,
  },
  forgotPasswordText: {
    fontSize: Typography.body,
    color: Colors.primary,
    fontWeight: Typography.regular,
  },
  buttonContainer: {
    gap: Spacing.md,
  },
  loginButton: {
    backgroundColor: Colors.systemGray3,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
  },
  loginButtonText: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: Colors.text,
  },
  loginButtonActive: {
    backgroundColor: '#0077b6',
  },
  loginButtonTextActive: {
    color: '#FFFFFF',
  },
  signUpButton: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.separator,
    minHeight: 56,
  },
  signUpButtonText: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: Colors.text,
  },
});
