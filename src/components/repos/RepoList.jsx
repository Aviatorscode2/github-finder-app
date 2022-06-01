import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList() {
  const { repos } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Lastest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
