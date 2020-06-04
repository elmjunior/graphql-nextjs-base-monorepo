
import React from 'react';
import App from '../components/App';
import UsersList from '../components/UsersList';
// eslint-disable-next-line import/named
import { withApollo } from '../lib/apollo';


function IndexPage() {
  return (
    <App>

      <UsersList />
    </App>
  );
}


export default withApollo({ ssr: true })(IndexPage);
