import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Comment from '../../components/Common/comment'; // Import the Comment component

const ArtworkCard = ({ artwork, onPress }) => {
  const { imageUrl, caption, user } = artwork;
  const [liked, setLiked] = useState(false); // State to track like status
  const [commentVisible, setCommentVisible] = useState(false); // State to track comment section visibility

  const handleLikePress = () => {
    setLiked(!liked); // Toggle like status
    // Additional logic for handling like action can be added here
  };

  const handleCommentPress = () => {
    setCommentVisible(!commentVisible); // Toggle comment section visibility
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {user && (
        <View style={styles.userContainer}>
          <Image source={{ uri: user.profileImage }} style={styles.userImage} />
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.artworkImage} />
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
      {/* Like and Comment Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLikePress}>
          <Icon
            name={liked ? 'favorite' : 'favorite-border'} // Use filled or outline heart icon based on liked state
            size={24}
            color={liked ? 'red' : 'white'} // Change color based on liked state
          />
          {/* Add Like count */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCommentPress}>
          <Icon name="comment" size={24} color="white" />
          {/* Add Comment count */}
        </TouchableOpacity>
      </View>
      {/* Comment section */}
      <Comment isVisible={commentVisible} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 5, // Android shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    position: 'relative',
  },
  artworkImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  captionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: 8,
  },
  caption: {
    fontSize: 16,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for buttons
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ArtworkCard;
