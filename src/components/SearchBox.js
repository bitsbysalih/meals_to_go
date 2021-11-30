import React from "react";
import { Searchbar } from "react-native-paper";

export const SearchBox = ({ onChangeText }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeText}
      style={{
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: "white",
      }}
    />
  );
};
