import { useQuery } from 'react-query';
import { api } from 'services/api';

const FIVE_SECONDS = 1000 * 5;

type User = {
  email: string;
  name: string;
  createdAt: string;
  id: string;
};

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('/users');

  const users = data.users.map((user: User) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return users;
}
export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: FIVE_SECONDS,
  });
}
