import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import PaginatedTable from './PaginatedTable';

interface User {
  id: string;
  email: string;
  created_at: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (!error && data) setUsers(data);
    };
    fetchUsers();
  }, []);

  const startEdit = (user: User) => {
    setEditing(user);
    setEmail(user.email);
  };

  const saveEdit = async () => {
    if (!editing) return;
    await supabase.from('users').update({ email }).eq('id', editing.id);
    setEditing(null);
    const { data } = await supabase.from('users').select('*');
    if (data) setUsers(data);
  };

  const deleteUser = async (id: string) => {
    await supabase.from('users').delete().eq('id', id);
    setUsers((u) => u.filter((x) => x.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      {editing && (
        <div className="mb-4 p-4 border rounded bg-white">
          <h3 className="font-semibold mb-2">Edit User</h3>
          <input
            className="border p-1 mr-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-2 py-1 bg-primary text-white mr-2" onClick={saveEdit}>Save</button>
          <button className="px-2 py-1" onClick={() => setEditing(null)}>Cancel</button>
        </div>
      )}
      <PaginatedTable
        columns={[
          { header: 'ID', accessor: 'id' },
          { header: 'Email', accessor: 'email' },
          { header: 'Created', accessor: 'created_at' },
        ]}
        data={users}
      />
      <div className="mt-2">
        {users.map((u) => (
          <div key={u.id} className="flex items-center gap-2">
            <button onClick={() => startEdit(u)} className="text-sm underline">Edit</button>
            <button onClick={() => deleteUser(u.id)} className="text-sm text-red-600 underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
