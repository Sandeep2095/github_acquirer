import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  
  borderRadius: '20px',
  margin: '5px',
  paddingLeft: '3rem', 
  paddingRight: '3rem',
  backgroundColor: 'coral',
  
};

export default Users;