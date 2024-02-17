import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';

const UserProfileScreen = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [bio, setBio] = useState('Passionate artist exploring the world of creativity.');
  const [profileImageUri, setProfileImageUri] = useState('https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7');
  const [userPosts, setUserPosts] = useState([
    { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.SuajL9BxeDiy4VV-XF8q9QHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7', caption: 'Beautiful Sunset' },
    { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.CJeJjqEKLIsbfEc8qxa9YQHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7', caption: 'Abstract Colors' },
    // Add more posts as needed
  ]);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleBioChange = (newBio) => {
    setBio(newBio);
  };

  const openImagePicker = async () => {
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

      console.log('ImagePicker result:', result);

      if (!result.cancelled && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking an image:', error);
    }
  };
  
  
  
  const renderUserPost = ({ item }) => (
    <TouchableOpacity style={styles.userPost} onPress={() => navigateToPostDetail(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </TouchableOpacity>
  );

  const navigateToPostDetail = (post) => {
    // Implement navigation to the detailed view of the post
    console.log('Navigate to post detail:', post);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <TouchableOpacity style={styles.changePhotoButton} onPress={openImagePicker}>
            <Icon name="photo-camera" size={24} color="#fff" />
          </TouchableOpacity>
          <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
          <Text style={styles.username}>{username}</Text>
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleUsernameChange}
            placeholder="Change your username"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={handleBioChange}
            placeholder="Tell others about yourself"
            multiline
            placeholderTextColor="#999"
          />
        </View>

        {/* User Posts Section */}
        <View style={styles.userPostsSection}>
          <Text style={styles.userPostsTitle}>Your Posts</Text>
          <FlatList
            data={userPosts}
            keyExtractor={(item) => item.id}
            renderItem={renderUserPost}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#202020',
  },
  container: {
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  changePhotoButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    marginTop: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  profileSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    color: '#fff',
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  userPostsSection: {
    marginBottom: 20,
  },
  userPostsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  userPost: {
    marginRight: 20,
  },
  postImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  postCaption: {
    color: '#fff',
    marginTop: 8,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserProfileScreen;
