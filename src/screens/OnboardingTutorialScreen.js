import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const tutorialData = [
  {
    id: '1',
    title: 'Welcome to Chore Manager',
    description: 'Easily manage your household chores'
  },
  {
    id: '2',
    title: 'Create and Assign Chores',
    description: 'Create and assign chores to your partner'
  },
  {
    id: '3',
    title: 'Set Reminders',
    description: 'Never forget a chore again with reminders'
  }
];

const OnboardingTutorialScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tutorialData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  slideTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slideDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
    
export default OnboardingTutorialScreen;