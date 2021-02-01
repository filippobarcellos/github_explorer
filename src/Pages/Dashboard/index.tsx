import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'
import Loader from 'react-loader-spinner';
import api from '../../services/api';

import Header from '../../components/Header';
import { Title, Form, UserList, Error } from './styles';

interface User {
  id: number,
  avatar_url: string,
  login: string,
}

const Dashboard: React.FC  = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [user, setUser] = useState<User[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!searchTerm) {
      setIsError('Please type a github username');
      return;
    };

    try {
      setIsLoading(true);

      const response = await api.get(`search/users?q=${searchTerm}`);
      setUser(response.data.items);
      setSearchTerm('');
      setIsError('');
    } catch (err) {
      setIsLoading(false);
      setIsError('Something is wrong. Please try again!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Title>Explore github's repositories</Title>

      <Form onSubmit={handleAddRepository} error={!!isError}>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="search" placeholder="Type repository name" />
        <button type="submit">{isLoading ? <Loader type="ThreeDots" color="#fff" height={40} width={40}/> : 'Search'}</button>
      </Form>

      {isError && <Error>{isError}</Error>} 

      <UserList>
        {user.map(user => (
          <Link to={user.login} key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </UserList>
    </>
  )
}

export default Dashboard;