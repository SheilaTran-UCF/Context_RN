import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ title, txt, setTxt }) => {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
			<TextInput
				value={txt}
				onChangeText={setTxt}
				style={styles.search}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	search: {
		top: 5,
		height: 40,
		borderRadius: 10,
		paddingLeft: 40,
		paddingRight: 10,
		backgroundColor: 'lightgrey',
		marginVertical: 15,
	},
	title: {
		top: 20,
		marginLeft: 20,
	},
});

export default CustomInput;
