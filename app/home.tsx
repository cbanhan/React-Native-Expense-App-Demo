import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import BackButton from './components/BackButton';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import { GlobalStyles } from '../styles/globalStyles';
import { Colors, Typography, Spacing } from '../styles/theme';

export default function HomePage() {
  const router = useRouter();

  const handleAddExpense = () => {
    router.push('/addexpense');
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
      <BackButton />
      
      <View style={styles.content}>
        {/* Decorative background circles */}
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />
        
        <View style={styles.emptyState}>
          {/* Main circular icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="receipt-outline" size={48} color="#FFFFFF" />
          </View>
          
          <Text style={styles.emptyTitle}>
            Great! You're ready to start{'\n'}tracking your expenses.
          </Text>
          <Text style={styles.emptyDescription}>
            Tap the + button below to add your first{'\n'}expense and start managing your monthly{'\n'}budget.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAddExpense}
          activeOpacity={0.8}
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <FooterNav activeTab="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    position: 'relative',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: 60,
    right: 40,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF6B47', // Orange color
    opacity: 0.8,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: 200,
    left: 50,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#87CEEB', // Light blue color
    opacity: 0.6,
  },
  emptyState: {
    alignItems: 'center',
    marginBottom: Spacing.xxxl,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#6BA3D0', // Blue gradient-like color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  emptyTitle: {
    fontSize: Typography.title2,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    lineHeight: Typography.title2 * 1.2,
  },
  emptyDescription: {
    fontSize: Typography.body,
    color: '#A8B2C1', // Lighter blue-gray color
    textAlign: 'center',
    lineHeight: Typography.body * 1.4,
    maxWidth: 320,
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
