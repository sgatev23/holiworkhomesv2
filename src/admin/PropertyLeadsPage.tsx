import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import PaginatedTable from './PaginatedTable';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  location: string;
  status: string | null;
  notes: string | null;
}

const PropertyLeadsPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [editing, setEditing] = useState<Lead | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await supabase.from('property_leads').select('*');
      if (data) setLeads(data);
    };
    fetchLeads();
  }, []);

  const startEdit = (lead: Lead) => {
    setEditing(lead);
    setStatus(lead.status || '');
  };

  const saveEdit = async () => {
    if (!editing) return;
    await supabase.from('property_leads').update({ status }).eq('id', editing.id);
    setEditing(null);
    const { data } = await supabase.from('property_leads').select('*');
    if (data) setLeads(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Property Leads</h2>
      {editing && (
        <div className="mb-4 p-4 bg-white border rounded">
          <h3 className="font-semibold mb-2">Update Status</h3>
          <input className="border p-1 mr-2" value={status} onChange={(e) => setStatus(e.target.value)} />
          <button className="px-2 py-1 bg-primary text-white mr-2" onClick={saveEdit}>Save</button>
          <button className="px-2 py-1" onClick={() => setEditing(null)}>Cancel</button>
        </div>
      )}
      <PaginatedTable
        columns={[
          { header: 'Name', accessor: 'name' },
          { header: 'Email', accessor: 'email' },
          { header: 'Phone', accessor: 'phone' },
          { header: 'Location', accessor: 'location' },
          { header: 'Status', accessor: 'status' },
        ]}
        data={leads}
      />
      <div className="mt-2">
        {leads.map((lead) => (
          <div key={lead.id} className="flex items-center gap-2">
            <button onClick={() => startEdit(lead)} className="text-sm underline">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyLeadsPage;
