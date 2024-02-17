import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Pass the search text to the parent component
    onSearch(searchText.trim().toLowerCase()); // Trim whitespace and convert to lowercase
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by username"
          placeholderTextColor="#757575" // Gray placeholder text color
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch} // Trigger search on submit
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search" size={24} color="#FFFFFF" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303030', // Black background color
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF', // White text color
    fontSize: 16,
    marginLeft: 8,
  },
  searchIcon: {
    marginLeft: 8,
  },
});

export default Search;
