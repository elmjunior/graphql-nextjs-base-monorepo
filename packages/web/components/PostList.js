import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';


export const ALL_USERS_QUERY = gql`
  query listUsers {
    listUsers {
      name
     
    }
    
  }
`;


export default function PostList() {
  const {
    loading, data,
  } = useQuery(
    ALL_USERS_QUERY,
    {

      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    },
  );

  if (loading) return <div>Loading</div>;


  const { listUsers } = data;

  return (
    <div>
      {listUsers.map((user, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          {user.name}

        </div>

      ))}
    </div>
  );
}
