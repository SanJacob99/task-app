import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { User } from "../types/CommonTypes";

const UserListItem = ({ user }: { user: User }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};
	// Images in the endpoint are broken or need special permission
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				{imageError ? (
					<Text>No Image</Text>
				) : (
					<Image
						source={{
							uri: "https://images.freeimages.com/vhq/images/previews/d50/butterfly-papilio-philenor-side-clip-art-545705.jpg"
						}}
						style={styles.image}
						onError={handleImageError}
					/>
				)}
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.name}>{user.name}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10
	},
	imageContainer: {
		marginRight: 10,
		height: 60,
		width: 60
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		resizeMode: "cover"
	},
	textContainer: {
		flex: 1
	},
	name: {
		fontSize: 16,
		fontWeight: "bold"
	}
});

export default UserListItem;
