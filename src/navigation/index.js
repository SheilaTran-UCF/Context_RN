import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditScreen from '../screens/EditScreen';
import HomeScreen from '../screens/HomeScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';

const Stack = createStackNavigator();

export default RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: 'Overview' }}
				/>
				<Stack.Screen name='Edit' component={EditScreen} />
				<Stack.Screen name='Show' component={ShowScreen} />
				<Stack.Screen name='Create' component={CreateScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
