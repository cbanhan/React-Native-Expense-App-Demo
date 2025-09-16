import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../../styles/theme';

interface FooterNavProps {
  activeTab: 'home' | 'categories' | 'settings';
}

interface TabItem {
  id: 'home' | 'categories' | 'settings';
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
}

const tabs: TabItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    route: '/home'
  },
  {
    id: 'categories',
    label: 'Categories',
    icon: 'pricetag',
    route: '/categories'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    route: '/settings'
  }
];

export default function FooterNav({ activeTab }: FooterNavProps) {
  const router = useRouter();

  const handleTabPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabItem}
            onPress={() => handleTabPress(tab.route)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? Colors.primary : Colors.textSecondary}
              />
            </View>
            <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    minWidth: 60,
  },
  iconContainer: {
    marginBottom: Spacing.xs / 2,
  },
  activeIconContainer: {
    // Additional styling for active icon if needed
  },
  tabLabel: {
    fontSize: Typography.caption,
    color: Colors.textSecondary,
    fontWeight: Typography.regular,
    textAlign: 'center',
  },
  activeTabLabel: {
    color: Colors.primary,
    fontWeight: Typography.medium,
  },
});
