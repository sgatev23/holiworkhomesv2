import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import PaginatedTable from './PaginatedTable';

interface Application {
  id: string;
  position_title: string;
  name: string;
  email: string;
  resume_url: string;
  status: string | null;
  notes: string | null;
}

const JobApplicationsPage = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [editing, setEditing] = useState<Application | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchApps = async () => {
      const { data } = await supabase.from('applications').select('*');
      if (data) setApplications(data);
    };
    fetchApps();
  }, []);

  const startEdit = (app: Application) => {
    setEditing(app);
    setStatus(app.status || '');
  };

  const saveEdit = async () => {
    if (!editing) return;
    await supabase.from('applications').update({ status }).eq('id', editing.id);
    setEditing(null);
    const { data } = await supabase.from('applications').select('*');
    if (data) setApplications(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Applications</h2>
      {editing && (
        <div className="mb-4 p-4 border rounded bg-white">
          <input className="border p-1 mr-2" value={status} onChange={(e) => setStatus(e.target.value)} />
          <button className="px-2 py-1 bg-primary text-white mr-2" onClick={saveEdit}>Save</button>
          <button className="px-2 py-1" onClick={() => setEditing(null)}>Cancel</button>
        </div>
      )}
      <PaginatedTable
        columns={[
          { header: 'Position', accessor: 'position_title' },
          { header: 'Name', accessor: 'name' },
          { header: 'Email', accessor: 'email' },
          { header: 'Resume', accessor: 'resume_url' },
          { header: 'Status', accessor: 'status' },
        ]}
        data={applications}
      />
      <div className="mt-2">
        {applications.map((app) => (
          <div key={app.id} className="flex items-center gap-2">
            <a href={supabase.storage.from('resumes').getPublicUrl(app.resume_url).data.publicUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline">Resume</a>
            <button onClick={() => startEdit(app)} className="text-sm underline">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplicationsPage;
