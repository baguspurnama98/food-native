import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SeacrhBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<FontAwesome5
				style={styles.iconStyle}
				name="search"
				size={20}
				color="black"
			/>
			<TextInput
				style={styles.inputStyle}
				value={term}
				onChangeText={onTermChange}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "grey",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 25,
		alignSelf: "center",
		marginHorizontal: 15,
	},
});

export default SeacrhBar;
