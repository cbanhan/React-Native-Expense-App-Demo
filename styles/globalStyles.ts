import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from './theme';

export const GlobalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  
  // Text styles
  title: {
    fontSize: Typography.title1,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: Typography.title3,
    fontWeight: Typography.semiBold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  body: {
    fontSize: Typography.body,
    fontWeight: Typography.regular,
    color: Colors.text,
    lineHeight: Typography.body * 1.4,
  },
  caption: {
    fontSize: Typography.caption1,
    fontWeight: Typography.regular,
    color: Colors.textSecondary,
  },
  
  // Button styles
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: Colors.background,
  },
  buttonSecondary: {
    backgroundColor: Colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonSecondaryText: {
    color: Colors.primary,
  },
  
  // Card styles
  card: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  
  // Input styles
  input: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: Typography.body,
    color: Colors.text,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputFocused: {
    borderColor: Colors.primary,
  },
  
  // Layout helpers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  
  // Spacing helpers
  mt: {
    marginTop: Spacing.md,
  },
  mb: {
    marginBottom: Spacing.md,
  },
  mx: {
    marginHorizontal: Spacing.md,
  },
  my: {
    marginVertical: Spacing.md,
  },
  pt: {
    paddingTop: Spacing.md,
  },
  pb: {
    paddingBottom: Spacing.md,
  },
  px: {
    paddingHorizontal: Spacing.md,
  },
  py: {
    paddingVertical: Spacing.md,
  },
});
