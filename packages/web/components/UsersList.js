import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import gql from 'graphql-tag';


export const ALL_USERS_QUERY = gql`
  query listUsers {
    listUsers {
      name
      slug
    }
    
  }
`;


export default function UsersList() {
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
      {listUsers.map((user) => (
        <Link href={`users/${user.slug}`} key={user.slug}>
          <div>
            Name:
            {' '}
            {user.name}
            <br />
            slug:
            {' '}
            {user.slug}
          </div>

        </Link>

      ))}
    </div>
  );
}
