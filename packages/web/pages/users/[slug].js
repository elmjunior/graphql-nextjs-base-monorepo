
import React from 'react';
import App from '../../components/App';

import { getUsers } from '../../services/users';

export default function Post({ slug }) {
  return (
    <App>

      <h1>{slug}</h1>
    </App>
  );
}


export async function getStaticPaths() {
  const paths = await getUsers();

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
