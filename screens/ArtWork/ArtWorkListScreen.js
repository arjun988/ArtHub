import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

const ArtWorkListScreen = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');

  const handleImagePicker = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking an image:', error);
    }
  };

  const handlePost = () => {
    // Implement logic to post the image with caption and description
    // You can use the 'image', 'caption', and 'description' states here
    console.log('Post image:', { image, caption, description });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      padding: 16,
    },
    postContainer: {
      backgroundColor: '#333',
      padding: 16,
      borderRadius: 12,
      elevation: 4,
    },
    cameraButton: {
      alignSelf: 'flex-end',
      backgroundColor: '#333',
      padding: 14,
      borderRadius: 20,
      marginBottom: 12,
      elevation: 2,
    },
    previewImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 12,
    },
    previewBox: {
      borderColor: '#fff',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      marginBottom: 12,
    },
    captionInput: {
      backgroundColor: '#808080',
      padding: 14,
      borderRadius: 8,
      marginBottom: 12,
      color: 'white',
    },
    descriptionInput: {
      backgroundColor: '#808080',
      padding: 14,
      borderRadius: 8,
      marginBottom: 12,
      minHeight: 100,
      color: 'white',
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

  return (
    <View style={styles.container}>
      {/* Posting Section */}
      <View style={styles.postContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleImagePicker}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
        {image ? (
          <Image source={{ uri: image }} style={styles.previewImage} />
        ) : (
          <View style={styles.previewBox}>
            <Text style={{ color: '#fff' }}>Image Preview</Text>
          </View>
        )}
        <TextInput
          style={styles.captionInput}
          placeholder="Caption"
          value={caption}
          onChangeText={setCaption}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArtWorkListScreen;
