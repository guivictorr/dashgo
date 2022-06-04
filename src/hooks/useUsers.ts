import { useQuery } from 'react-query';
import { api } from 'services/api';

const FIVE_SECONDS = 1000 * 5;

type User = {
  email: string;
  name: string;
  createdAt: string;
  id: string;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: User) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return {
    users,
    totalCount,
  };
}
export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: FIVE_SECONDS,
  });
}
