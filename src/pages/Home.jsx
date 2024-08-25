import SectionStart from './../components/SectionStart';
import SectionMembers from './../components/SectionMembers';
import { useState } from 'react';

export default function Home() {
  const [signedUsers, setSigendUsers] = useState([]);

  function handleAddSignedUser(user) {
    setSigendUsers((users) => [...users, user]);
  }

  return (
    <>
      <SectionStart onAddSignedUser={handleAddSignedUser} />
      <SectionMembers />
    </>
  );
}
