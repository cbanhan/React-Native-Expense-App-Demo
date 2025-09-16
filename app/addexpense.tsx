import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Header from './components/Header';
import Button from './components/Button';
import { Colors, Typography, Spacing, BorderRadius } from '../styles/theme';

export default function AddExpensePage() {
  const router = useRouter();
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [dayOfMonth, setDayOfMonth] = useState('15');
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [isRecurring, setIsRecurring] = useState(false);
  const [notes, setNotes] = useState('');

  // Validation functions
  const handleAmountChange = (text: string) => {
    // Remove any non-numeric characters except decimal point
    const numericText = text.replace(/[^0-9.]/g, '');
    
    // Ensure only one decimal point
    const parts = numericText.split('.');
    if (parts.length > 2) {
      return; // Don't update if more than one decimal point
    }
    
    // Limit to 2 decimal places
    if (parts[1] && parts[1].length > 2) {
      return; // Don't update if more than 2 decimal places
    }
    
    setAmount(numericText);
  };

  const handleDayChange = (text: string) => {
    // Only allow numbers and limit to 1-31
    const numericText = text.replace(/[^0-9]/g, '');
    const dayNumber = parseInt(numericText);
    
    if (numericText === '' || (dayNumber >= 1 && dayNumber <= 31)) {
      setDayOfMonth(numericText);
    }
  };

  const categories = [
    { name: 'Housing', icon: 'home' },
    { name: 'Food', icon: 'restaurant' },
    { name: 'Transport', icon: 'car' },
    { name: 'Fun', icon: 'game-controller' },
    { name: 'Utilities', icon: 'flash' },
    { name: 'Health', icon: 'heart' },
  ];

  const handleSaveExpense = () => {
    // For now, just navigate back to home
    // In the future, this would save the expense to state/storage
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Add Expense" />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Expense Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter expense name"
            value={expenseName}
            onChangeText={setExpenseName}
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="decimal-pad"
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Day of Month</Text>
          <TextInput
            style={styles.input}
            placeholder="15"
            value={dayOfMonth}
            onChangeText={handleDayChange}
            keyboardType="number-pad"
            maxLength={2}
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.name && styles.categoryButtonSelected
                ]}
                onPress={() => setSelectedCategory(category.name)}
              >
                <Ionicons 
                  name={category.icon as any} 
                  size={20} 
                  color={selectedCategory === category.name ? '#FFFFFF' : Colors.primary} 
                />
                <Text style={[
                  styles.categoryText,
                  selectedCategory === category.name && styles.categoryTextSelected
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.newCategoryButton}>
              <Ionicons name="add" size={20} color={Colors.primary} />
              <Text style={styles.newCategoryText}>New Category</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recurringContainer}>
          <View style={styles.recurringContent}>
            <Text style={styles.recurringTitle}>Recurring</Text>
            <Text style={styles.recurringSubtitle}>Repeat this expense monthly</Text>
          </View>
          <Switch
            value={isRecurring}
            onValueChange={setIsRecurring}
            trackColor={{ false: Colors.systemGray5, true: Colors.primary }}
            thumbColor={isRecurring ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Notes (Optional)</Text>
          <TextInput
            style={[styles.input, styles.notesInput]}
            placeholder="Add any additional notes..."
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Save Expense"
            onPress={handleSaveExpense}
            style={styles.saveButton}
          />
          
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.lg,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  label: {
    fontSize: Typography.body,
    fontWeight: Typography.medium,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  input: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: Typography.body,
    color: Colors.text,
    borderWidth: 0,
    minHeight: 50,
  },
  dropdownInput: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 50,
  },
  dropdownText: {
    fontSize: Typography.body,
    color: Colors.text,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundTertiary,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    gap: Spacing.xs,
    marginBottom: Spacing.sm,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    fontSize: Typography.callout,
    color: Colors.primary,
    fontWeight: Typography.medium,
  },
  categoryTextSelected: {
    color: '#FFFFFF',
  },
  newCategoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
    gap: Spacing.xs,
    marginBottom: Spacing.sm,
  },
  newCategoryText: {
    fontSize: Typography.callout,
    color: Colors.primary,
    fontWeight: Typography.medium,
  },
  recurringContainer: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  recurringContent: {
    flex: 1,
  },
  recurringTitle: {
    fontSize: Typography.body,
    fontWeight: Typography.medium,
    color: Colors.text,
  },
  recurringSubtitle: {
    fontSize: Typography.subhead,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  notesInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },
  saveButton: {
    backgroundColor: Colors.primary,
  },
  cancelButton: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  cancelButtonText: {
    fontSize: Typography.body,
    color: Colors.text,
    fontWeight: Typography.medium,
  },
});
