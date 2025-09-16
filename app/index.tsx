import React, { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Typography, Spacing } from '../styles/theme';

export default function Index() {
  const router = useRouter();
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the animated dots
    const animateDots = () => {
      const createDotAnimation = (animValue: Animated.Value, delay: number) => {
        return Animated.loop(
          Animated.sequence([
            Animated.delay(delay),
            Animated.timing(animValue, {
              toValue: -10,
              duration: 400,
              useNativeDriver: true,
            }),
            Animated.timing(animValue, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
          ])
        );
      };

      Animated.parallel([
        createDotAnimation(dot1Anim, 0),
        createDotAnimation(dot2Anim, 200),
        createDotAnimation(dot3Anim, 400),
      ]).start();
    };

    animateDots();

    // Navigate to welcome screen after loading
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router, dot1Anim, dot2Anim, dot3Anim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* App Icon */}
        <View style={styles.iconContainer}>
          <Ionicons name="wallet" size={64} color="#FFFFFF" />
        </View>

        {/* App Name */}
        <Text style={styles.appName}>ExpenseTracker</Text>
        
        {/* Tagline */}
        <Text style={styles.tagline}>Track your monthly expenses</Text>

        {/* Animated Dots */}
        <View style={styles.dotsContainer}>
          <Animated.View 
            style={[
              styles.dot, 
              { transform: [{ translateY: dot1Anim }] }
            ]} 
          />
          <Animated.View 
            style={[
              styles.dot, 
              { transform: [{ translateY: dot2Anim }] }
            ]} 
          />
          <Animated.View 
            style={[
              styles.dot, 
              { transform: [{ translateY: dot3Anim }] }
            ]} 
          />
        </View>

        {/* Version */}
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 24,
    backgroundColor: Colors.primary,
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
  appName: {
    fontSize: Typography.largeTitle,
    fontWeight: Typography.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  tagline: {
    fontSize: Typography.body,
    color: '#A8B2C1',
    textAlign: 'center',
    marginBottom: Spacing.xxxl,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xxxl,
    gap: Spacing.sm,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    opacity: 0.7,
  },
  version: {
    position: 'absolute',
    bottom: 50,
    fontSize: Typography.caption1,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
