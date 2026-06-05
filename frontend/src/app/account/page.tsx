// src/app/users/page.tsx

import { getUsers } from "@/services/api";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {users.map((user: any) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}