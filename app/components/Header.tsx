import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../../styles/theme';

interface HeaderProps {
  title: string;
  icon?: {
    name: string;
    backgroundColor?: string;
    size?: number;
  };
}

export default function Header({ title, icon }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {icon && (
          <View style={[
            styles.iconContainer, 
            { backgroundColor: icon.backgroundColor || '#0077b6' }
          ]}>
            <Ionicons 
              name={icon.name as any} 
              size={icon.size || 20} 
              color="#FFFFFF" 
            />
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#E5E5EA',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Typography.headline,
    fontWeight: Typography.semiBold,
    color: Colors.text,
    textAlign: 'center',
  },
});
