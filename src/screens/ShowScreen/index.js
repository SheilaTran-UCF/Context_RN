import React from 'react';
import Header from '../../components/Header';
import {
	View,
	Text,
	Button,
	TextInput,
	StyleSheet,
	SafeAreaView,
} from 'react-native';

export default function ShowScreen({ navigation, route }) {
	const { title, content, id } = route.params;

	return (
		<SafeAreaView>
			<Header
				title='Show Screen'
				icon='edit'
				customNavigation={navigation}
				navigationName={'Edit'}
				itemPassToRoute={route.params}
			/>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.content}>{content}</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		borderColor: 'tomato',
		borderWidth: 2,
		marginTop: 30,
	},
	title: {
		fontSize: 30,
	},
	content: {
		fontSize: 20,
		marginTop: 20,
	},
});
