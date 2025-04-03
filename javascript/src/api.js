import axios from 'axios';

// Function to fetch a random joke
export const fetchJoke = async () => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    return response.data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
};

// Function to fetch a random user
export const fetchRandomUser = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching random user:', error);
    return null;
  }
};

// Function to fetch random quote
export const fetchQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
};

// Function to fetch a list of users from JSONPlaceholder
export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

// Function to fetch a random cat fact
export const fetchCatFact = async () => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    return response.data;
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    return null;
  }
};
