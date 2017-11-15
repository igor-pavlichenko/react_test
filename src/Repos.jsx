import React from 'react';
import './Repos.css';

const Repos = props => (
  <div className="repos">
    {props.repos.length &&
      props.repos.map(repo => {
        return (
          <div key={repo.id} className="repo">
            <h3>
              <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <p>{repo.description}</p>
            <div className="misc-info">
              <span>{repo.language}</span>
              <span>
                <i className="fa fa-fw fa-star"></i>
                {repo.stargazers_count}
              </span>
              <span>
                <i className="fa fa-fw fa-code-fork"></i>
                {repo.forks}
              </span>
            </div>
            <hr />
          </div>
        );
      })
    }
  </div>
);

export default Repos;
