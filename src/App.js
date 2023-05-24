import React from 'react';
import { Input } from './components/Input/Input';
import { Card } from './UI/Card';
import './App.css';
import { useState } from 'react';
import { UserList } from './components/UserList/UserList';
import { Alert } from './components/Alert/Alert';


const App = () => {
  const [users, setUsers] = useState([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const submitInput = (userName, age) => {
    if (userName.trim().length === 0) {
      setIsAlertVisible(true);
      setErrorMessage(prev => [...prev, "Please enter a valid name and age (non-empty values)"]);

      if (!age || +age < 0 || +age > 125) {
        setErrorMessage(prev=> [...prev, "Please enter a valid age (0 < 125)"]);
      }
    } else if (!age || +age < 0 || +age > 125) {
      setIsAlertVisible(true);
      setErrorMessage(prev=> [...prev, "Please enter a valid age (0 < 125)"]);
    } else {
      setUsers(prev => {
      const updatedInput = [...prev];
      updatedInput.unshift({
        id: Math.random().toString(),
        userName: userName,
        age: age,
      });
      return updatedInput;
    })
    }
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const EscapeErrorMessage = () => {
    setIsAlertVisible(false);
    setErrorMessage([]);
  }

  return (
    <div className='app-container'>
      {isAlertVisible &&
        <Alert 
        errorMessage={errorMessage}
        onErrorEscape={EscapeErrorMessage} />}
      <Card className="first-card">
        <Input onSubmit={submitInput} />
      </Card>
      <Card>
        <UserList
          users={users}
          onDelete={deleteUser} />
      </Card>
    </div>
  );
}

export default App;
