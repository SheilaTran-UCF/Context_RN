import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const Header = ({
	title,
	icon,
	styleOut,
	customNavigation,
	navigationName,
	itemPassToRoute,
}) => {
	return (
		<View style={[styles.container, styleOut]}>
			<View></View>
			<Text
				style={{
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				{title}
			</Text>
			{icon ? (
				// navigation.navigate('Create')
				<TouchableOpacity
					onPress={() =>
						customNavigation.navigate(
							navigationName,
							itemPassToRoute
						)
					}
				>
					<Icon style={{ right: 20 }} name={icon} size={30} />
				</TouchableOpacity>
			) : (
				<></>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'tomato',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
		height: 80,
		alignItems: 'center',
		borderRadius: 10,
	},
});

export default Header;
