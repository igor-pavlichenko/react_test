import React from 'react';
import './UserInformation.css';

const UserInformation = props => (
  <div className="user-info">
    <img className="avatar" height={230} width={230} src={props.user.avatar_url} alt="User's avatar" />
    <div className="names">
      <h1>{props.user.name}</h1>
      <p>{props.user.login}</p>
    </div>
    <p>{props.user.bio}</p>
    <hr />
    <ul>
      <li>
        <i className="fa fa-fw fa-map-marker"></i>
        <span>{props.user.location}</span>
      </li>
      {props.user.company &&
        <li>
          <i className="fa fa-fw fa-building-o"></i>
          <span>{props.user.company}</span>
        </li>
      }
      {props.user.email &&
        <li>
          <i className="fa fa-fw fa-envelope-o"></i>
          <span><a href={"mailto:" + props.user.email}>{props.user.email}</a></span>
        </li>
      }
      {props.user.blog &&
        <li>
          <i className="fa fa-fw fa-twitter"></i>
          <span><a href={props.user.blog}>{props.user.blog}</a></span>
        </li>
      }
    </ul>
  </div>
);

export default UserInformation;
