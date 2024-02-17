import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Comment = ({ isVisible }) => {
  const [commentText, setCommentText] = useState('');

  const handleComment = () => {
    // Handle comment logic
    console.log('Comment submitted:', commentText);
    // Additional logic can be added here, such as sending the comment to a server
    // Clear comment text after submission
    setCommentText('');
  };

  if (!isVisible) {
    return null; // Don't render the comment section if isVisible is false
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a comment..."
        value={commentText}
        onChangeText={setCommentText}
      />
      <TouchableOpacity style={styles.button} onPress={handleComment}>
        <Icon name="send" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // White background for comment section
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 8,
  },
  input: {
    flex: 1,
    color: 'black', // Text color
    fontSize: 16,
  },
  button: {
    marginLeft: 8,
  },
});

export default Comment;
