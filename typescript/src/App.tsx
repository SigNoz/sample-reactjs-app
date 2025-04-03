import React, { useEffect, useState } from 'react';
import { fetchJoke, fetchRandomUser, fetchQuote, fetchUsers, fetchCatFact } from './api';

const App: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [quote, setQuote] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [catFact, setCatFact] = useState<string | null>(null);

  useEffect(() => {
    // Fetch joke
    const getJoke = async () => {
      const jokeData = await fetchJoke();
      setJoke(jokeData?.setup + ' - ' + jokeData?.punchline);
    };

    // Fetch random user
    const getUser = async () => {
      const userData = await fetchRandomUser();
      setUser(userData);
    };

    // Fetch quote
    const getQuote = async () => {
      const quoteData = await fetchQuote();
      setQuote(quoteData?.content);
    };

    // Fetch users
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    // Fetch cat fact
    const getCatFact = async () => {
      const catFactData = await fetchCatFact();
      setCatFact(catFactData?.fact);
    };

    getJoke();
    getUser();
    getQuote();
    getUsers();
    getCatFact();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the ReactJS App</h1>

      <div>
        <h2>Random Joke:</h2>
        {joke ? <p>{joke}</p> : <p>Loading...</p>}
      </div>

      <div>
        <h2>Random User:</h2>
        {user ? (
          <div>
            <p>Name: {user.name.first} {user.name.last}</p>
            <img src={user.picture.large} alt="User" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        <h2>Random Quote:</h2>
        {quote ? <p>"{quote}"</p> : <p>Loading...</p>}
      </div>

      <div>
        <h2>Users List:</h2>
        {users.length ? (
          <ul>
            {users.map((u: any) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        <h2>Random Cat Fact:</h2>
        {catFact ? <p>{catFact}</p> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
