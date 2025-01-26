import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "@/components/common/Header";
import ProfileHeader from "@/components/profile/ProfileImage";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileFooter from "@/components/profile/ProfileFooter";

const ProfilePage: React.FC = () => {
  const fieldValues = {
    name: "Pedro Ariel",
    email: "Pedro@gmail.com",
    cpf: "123.456.789-00",
    address: "123 Street Name, Neighborhood, City, State, ZIP Code",
    password: "********",
  };

  const handleEditPress = () => {
    console.log("Edit Pressed");
  };

  const handleLogoutPress = () => {
    console.log("Logout Pressed");
  };

  const handleDeletePress = () => {
    console.log("Delete Pressed");
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProfileHeader
          imageUri="https://th.bing.com/th/id/OIP.kf9TvsuxepBOhAV4cTHEoAHaHa?rs=1&pid=ImgDetMain"
          name={fieldValues.name}
          email={fieldValues.email}
        />
        <ProfileInfo fieldValues={fieldValues} onEditPress={handleEditPress} />
      </ScrollView>
      <ProfileFooter
        onLogoutPress={handleLogoutPress}
        onDeletePress={handleDeletePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
});

export default ProfilePage;
