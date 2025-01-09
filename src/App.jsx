import './App.css'
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = formData => {
    setMailboxes([...mailboxes, { _id: mailboxes.length + 1, ...formData }]);
  };

  const addLetters = formData => {
    setLetters([...letters, { _id: letters.length + 1, ...formData }]);
  };

  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetters={addLetters} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
    </Routes>
  </>;
};

export default App;

