import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userActions';

import { useSelector } from 'react-redux';

export default function Example() {
  const dispatch = useDispatch(); // Add this line
  const navigation = useNavigation();

  const userDataList = useSelector((state) => state.userList) || [];


  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    phoneNumber: '',
    location: '',
    age: '',
  });

  const handleSignUp = () => {
    const signupData = {
      fullname: form.fullname,
      email: form.email,
      password: form.password,
      phoneNumber: form.phoneNumber,
      location: form.location,
      age: form.age,
    };
    if (!validateEmail(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (form.password.length < 5) {
      alert('Password must be at least 5 characters');
      return;
    }
  
    if (!validatePhoneNumber(form.phoneNumber)) {
      alert('Please enter a valid phone number (10 digits)');
      return;
    }

    // Check if the user with the same email already exists
    const existingUser = userDataList.find((user) => user.email === signupData.email);

    if (existingUser) {
      // Update the existing user data instead of adding a new one
      // You need to dispatch an action to update the user, assuming you have a corresponding action for that
      // dispatch(updateUser(signupData));
    } else {
      // Add the user to the Redux store
      dispatch(setUser(signupData));
    }

    // Show a pop-up (you can replace this with your desired logic)
    alert('Sign up successful!');

    // Navigate to the Login page
    navigation.navigate('Login');
  };
  const validateEmail = (email) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Helper function to validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    // Use a regular expression to validate a 10-digit phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started</Text>
          <Text style={styles.subtitle}>Create an account to continue</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Full name</Text>
              <TextInput
                onChangeText={(fullname) => setForm({ ...form, fullname })}
                placeholder="John Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.fullname}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="****"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                onChangeText={(phoneNumber) => setForm({ ...form, phoneNumber })}
                placeholder="123-456-7890"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                keyboardType="phone-pad"
                value={form.phoneNumber}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Location</Text>
              <TextInput
                onChangeText={(location) => setForm({ ...form, location })}
                placeholder="City, Country"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.location}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Age</Text>
              <TextInput
                onChangeText={(age) => setForm({ ...form, age })}
                placeholder="25"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                keyboardType="numeric"
                value={form.age}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  handleSignUp(); // Call the function
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.formFooter}>
                Already have an account?{' '}
                <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
  },
  /** Form */
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});