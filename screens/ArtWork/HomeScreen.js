import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from '../../components/Common/search'; // Import the Search component
import ArtworkCard from '../../components/ArtWork/ArtworkCard';
import ArtworkDetail from '../../components/ArtWork/ArtworkDetail';

const HomeScreen = () => {
  const artworkData = [
    { id: '1', imageUrl: 'https://th.bing.com/th/id/OIP.SuajL9BxeDiy4VV-XF8q9QHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7', caption: 'Beautiful Sunset', description: 'An amazing artwork capturing the essence of a sunset.', user: { name: 'John Doe', profileImage: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7' } },
    { id: '2', imageUrl: 'https://th.bing.com/th/id/OIP.CJeJjqEKLIsbfEc8qxa9YQHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7', caption: 'Abstract Colors', description: 'Vibrant colors creating a sense of abstract beauty.', user: { name: 'Jane Smith', profileImage: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7' } },
    { id: '3', imageUrl: 'https://th.bing.com/th?q=Abstract+Face+Painting&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247', caption: 'Faces of Emotion', description: 'Expressive faces portrayed through abstract painting.', user: { name: 'Robert Johnson', profileImage: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7' } },
    { id: '4', imageUrl: 'https://th.bing.com/th/id/OIP.B-Vdm6rSC_iy3GSb4lvsCgHaEU?w=318&h=185&c=7&r=0&o=5&pid=1.7', caption: 'Nature\'s Harmony', description: 'A serene artwork depicting the harmony of nature.', user: { name: 'Emily Brown', profileImage: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7' } },
    { id: '5', imageUrl: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7', caption: 'Mystical Landscape', description: 'Journey into a mystical landscape with this captivating artwork.', user: { name: 'David Wilson', profileImage: 'https://th.bing.com/th/id/OIP.0fXGdNRWwejzikQAdKFnpwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7' } },
  ];

  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showSearch, setShowSearch] = useState(false); // State to toggle search visibility
  const [filteredArtworkData, setFilteredArtworkData] = useState(artworkData); 

  const handleArtworkPress = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleBackPress = () => {
    setSelectedArtwork(null);
  };

  const handleSearchIconPress = () => {
    setShowSearch(!showSearch); // Toggle search visibility
  };

  const handleSearch = (searchText) => {
    const filteredArtworkData = artworkData.filter(item =>
      item.user.name.toLowerCase().includes(searchText)
    );
      setFilteredArtworkData(filteredArtworkData);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo (2).jpeg')} style={styles.logo} />
          <Text style={styles.navTitle}>Art Hub</Text>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleSearchIconPress}>
            <Icon name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Icon name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the Search component only if showSearch is true */}
      {showSearch && <Search onSearch={handleSearch} />}

      {/* Artwork Feed */}
      {selectedArtwork ? (
        <ArtworkDetail artwork={selectedArtwork} onBackPress={handleBackPress} />
      ) : (
        <FlatList
  data={filteredArtworkData} /* Use filteredArtworkData instead of artworkData */
  keyExtractor={(item) => item.id}
  renderItem={({ item, index }) => (
    <View style={index % 2 === 0 ? styles.darkCard : styles.lightCard}>
      <ArtworkCard artwork={item} onPress={() => handleArtworkPress(item)} />
      {index < filteredArtworkData.length - 1 && <View style={styles.separator} />}
    </View>
  )}
  style={styles.flatList}
/>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'white', // White line color
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuItem: {
    marginLeft: 18,
  },
  flatList: {
    flex: 1,
    paddingTop: 16,
  },
  darkCard: {
    backgroundColor: 'black',
  },
  lightCard: {
    backgroundColor: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 8,
  },
});

export default HomeScreen;
