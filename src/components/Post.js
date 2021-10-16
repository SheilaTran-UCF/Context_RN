import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

const Post = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
			<Icon name='trash-o' size={30} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		borderColor: 'black',
		borderWidth: 1,
		marginVertical: 10,
	},
});

export default Post;
