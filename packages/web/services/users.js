/* eslint-disable import/prefer-default-export */


import axios from 'axios';
import env from '../config/env';

export async function getUsers() {
  let users = ['foo'];
  const { data } = await axios.post(env.GRAPHQL_URL, {
    query: `query listUsers {
    listUsers {
      slug
    }
  }`,
  });
  if (data.data && data.data.listUsers) {
    const { listUsers } = data.data;

    users = listUsers.map((user) => user.slug);
  }
  return users.map((slug) => ({
    params: {
      slug,
    },
  }));
}
export function getUser(slug) {

}
