import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Typography, Spacing, BorderRadius } from '../../styles/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
}

export default function Button({ title, onPress, disabled = false, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0077b6',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: '#FFFFFF',
  },
  buttonTextDisabled: {
    color: '#999999',
  },
});
