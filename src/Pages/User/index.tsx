import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Header from '../../components/Header';
import api from '../../services/api';

import { UserInfo, Repositories } from './styles';
import Pagination from '../../components/Pagination';

interface UserParams {
  user: string;
}

interface UserProps {
  id: number,
  avatar_url: string,
  login: string,
  bio: string,
  followers: number,
  following: number,
  public_repos: number,
}

interface Repository {
  id: number,
  name: string,
  html_url: string,
}

const User: React.FC  = () => {
  const [userInfo, setUserInfo] = useState<UserProps | null>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { user } = useParams<UserParams>();

  useEffect(() => {
    api.get(`users/${user}`).then(response => setUserInfo(response.data));
    api.get(`users/${user}/repos?page=${currentPage}&per_page=10`).then(response => setRepositories(response.data));
  }, [user, currentPage])

  const onPageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      <Header>
        <Link to="/github_explorer">
          <FiChevronLeft size={16} />
          Go Back
        </Link>
      </Header>

      {userInfo && (
        <UserInfo>
          <header>
            <img src={userInfo.avatar_url} alt={userInfo.login} />
            <div>
              <strong>{userInfo.login}</strong>
              <span>{userInfo.bio}</span>
            </div>
          </header>

          <ul>
            <li>
              <strong>{userInfo.followers}</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>{userInfo.following}</strong>
              <span>following</span>
            </li>
            <li>
              <strong>{userInfo.public_repos}</strong>
              <span>repositories</span>
            </li>
          </ul>
        </UserInfo>
      )}
      
      {repositories &&  (
        <Repositories>
          {repositories.map(repo => (
            <a href={repo.html_url} key={repo.id}>
              <div>
                <strong>{repo.name}</strong>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
        </Repositories>
      )}

      {userInfo && repositories && (
        <Pagination 
          totalItems={userInfo.public_repos} 
          currentPage={currentPage} 
          onPageChange={onPageChange}
          itemsPerPage={10} 
        /> 
      )}
    </>
  )
}

export default User;