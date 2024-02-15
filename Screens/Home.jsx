import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { logoutUser } from '../redux/userActions';
const Home = ({ navigation }) => {
  const userDataList = useSelector((state) => state.userList) || [];
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUserData = userDataList.filter((userData) =>
    Object.values(userData).some(
      (value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleLogout = () => {
    // Dispatch logout action to clear user data
    dispatch(logoutUser());
    // Navigate back to the Login screen or perform other actions
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, email, phone, etc."
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>
        {filteredUserData.length === 0 ? (
          <Text style={styles.noDataText}>No matching user data</Text>
        ) : (
          <View style={styles.container}>
            {filteredUserData.map((userData, index) => (
              <Card key={index} style={[styles.card, { backgroundColor: getRandomColor() }]}>
                <Card.Content>
                  <Text style={styles.cardText}>Full Name: {userData.fullname}</Text>
                  <Text style={styles.cardText}>Email: {userData.email}</Text>
                  <Text style={styles.cardText}>Phone Number: {userData.phoneNumber}</Text>
                  <Text style={styles.cardText}>Location: {userData.location}</Text>
                  <Text style={styles.cardText}>Age: {userData.age}</Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// ... (rest of the code remains unchanged)


const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57']; // Add more colors as needed
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 0.5,
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  card: {
    width: '80%',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
  noDataText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default Home;
