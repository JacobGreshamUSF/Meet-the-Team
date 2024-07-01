//U59555732
// src/App.js
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';

const teamMembers = [
  { id: 1, name: 'Alice Johnson', role: 'CEO', photo: 'alice.jpg' },
  { id: 2, name: 'Bob Smith', role: 'CTO', photo: 'bob.jpg' },
  { id: 3, name: 'Charlie Brown', role: 'Lead Developer', photo: 'charlie.jpg' },
  // Add more team members as needed
];

function App() {
  return (
    <div className="App">
      <Header title="Meet the Team" />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
// src/components/Header.js
import React from 'react';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
// src/components/Gallery.js
import React from 'react';
import Profile from './Profile';

function Gallery({ teamMembers }) {
  return (
    <div className="gallery">
      {teamMembers.map(member => (
        <Profile key={member.id} name={member.name} role={member.role} photo={member.photo} />
      ))}
    </div>
  );
}

export default Gallery;
// src/components/Profile.js
import React from 'react';

function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={`${name}'s photo`} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default Profile;
