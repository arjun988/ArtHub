// ArtworkDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ArtworkDetail = ({ artwork, onBackPress }) => {
  const { imageUrl, caption, description, user } = artwork;

  return (
    <View style={styles.container}>
      {/* User Button */}
      <View style={styles.userButtonContainer}>
        <TouchableOpacity style={styles.userButton} activeOpacity={0.7}>
          <Image source={{ uri: user.profileImage }} style={styles.userImage} />
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress} activeOpacity={0.7}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.artworkImage} />
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  userButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
    padding: 10,
    marginLeft: 8,
  },
  imageContainer: {
    position: 'relative',
    elevation: 10, // Android shadow effect
    shadowColor: 'black', // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow offset
    shadowOpacity: 0.4, // iOS shadow opacity
    shadowRadius: 5, // iOS shadow radius
  },
  artworkImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  contentContainer: {
    padding: 16,
  },
  caption: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#b0b0b0',
    lineHeight: 24,
  },
});

export default ArtworkDetail;
