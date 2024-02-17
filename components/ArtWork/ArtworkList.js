import React from 'react';
import { FlatList } from 'react-native';
import ArtworkCard from './ArtworkCard';

const ArtworkList = ({ artworkData, onArtworkPress }) => {
  return (
    <FlatList
      data={artworkData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ArtworkCard artwork={item} onPress={() => onArtworkPress(item)} />
      )}
    />
  );
};

export default ArtworkList;
