import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Header from './components/Header';
import Button from './components/Button';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../styles/globalStyles';
import { Colors, Typography, Spacing } from '../styles/theme';

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/auth');
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header 
        title="Expense Tracker" 
        icon={{
          name: "wallet",
          backgroundColor: "#0077b6",
          size: 20
        }}
      />
      
      <View style={styles.mainContent}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Track your recurring expenses with ease</Text>
            <Text style={styles.heroSubtitle}>
              Stay on top of your monthly spending with simple, automatic tracking.
            </Text>
          </View>

          <View style={styles.illustrationSection}>
            <View style={styles.illustrationContainer}>
              <View style={styles.mockupCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.dots}>
                    <View style={[styles.dot, styles.dotActive]} />
                    <View style={styles.dot} />
                  </View>
                  <View style={styles.addButton}>
                    <Ionicons name="add" size={16} color="#FFFFFF" />
                  </View>
                </View>
                <View style={styles.cardContent}>
                  <View style={styles.line} />
                  <View style={[styles.line, styles.lineShort]} />
                  <View style={[styles.line, styles.lineButton]} />
                </View>
              </View>
              <View style={styles.notificationBadge}>
                <Ionicons name="notifications" size={12} color="#FFFFFF" />
              </View>
            </View>
          </View>

          <View style={styles.featuresSection}>
            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.featureText}>Add expenses in seconds</Text>
            </View>
            
            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.featureText}>Automatic monthly calculations</Text>
            </View>
            
            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.featureText}>Clear category breakdowns</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonSection}>
          <Button title="Get Started" onPress={handleGetStarted} style={styles.getStartedButton} />
          <Text style={styles.footerText}>Start now for free!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: Typography.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.md,
    lineHeight: 34,
  },
  heroSubtitle: {
    fontSize: Typography.body,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: Typography.body * 1.4,
    maxWidth: 320,
  },
  illustrationSection: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  illustrationContainer: {
    position: 'relative',
    marginBottom: Spacing.lg,
  },
  mockupCard: {
    width: 160,
    height: 112,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: Spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5EA',
  },
  dotActive: {
    backgroundColor: '#9BB5C7',
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0077b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    gap: 8,
  },
  line: {
    height: 8,
    backgroundColor: '#F2F2F7',
    borderRadius: 4,
  },
  lineShort: {
    width: '60%',
  },
  lineButton: {
    backgroundColor: '#0077b6',
    marginTop: Spacing.sm,
    height: 12,
  },
  notificationBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationTitle: {
    fontSize: Typography.title3,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  illustrationSubtitle: {
    fontSize: Typography.body,
    color: '#9BB5C7',
    textAlign: 'center',
  },
  featuresSection: {
    marginBottom: Spacing.lg,
    gap: Spacing.md,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  featureIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0077b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: Typography.body,
    color: Colors.text,
    fontWeight: Typography.medium,
  },
  buttonSection: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxxl,
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.background,
  },
  getStartedButton: {
    width: '100%',
    paddingVertical: Spacing.lg,
    borderRadius: 12,
  },
  footerText: {
    fontSize: Typography.footnote,
    color: Colors.text,
    textAlign: 'center',
  },
});
