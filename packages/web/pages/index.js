
import React from 'react';
import App from '../components/App';
import PostList from '../components/PostList';
// eslint-disable-next-line import/named
import { withApollo } from '../lib/apollo';


function IndexPage() {
  return (
    <App>

      <PostList />
    </App>
  );
}


export default withApollo({ ssr: true })(IndexPage);
