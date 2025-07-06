import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import PaginatedTable from './PaginatedTable';

interface Inquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  resolved: boolean;
  created_at: string;
}

const ContactInquiriesPage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from('contact_inquiries').select('*');
      if (data) setInquiries(data);
    };
    fetchData();
  }, []);

  const toggleResolved = async (inq: Inquiry) => {
    await supabase.from('contact_inquiries').update({ resolved: !inq.resolved }).eq('id', inq.id);
    setInquiries((prev) => prev.map((i) => (i.id === inq.id ? { ...i, resolved: !inq.resolved } : i)));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Inquiries</h2>
      <PaginatedTable
        columns={[
          { header: 'Name', accessor: 'first_name' },
          { header: 'Email', accessor: 'email' },
          { header: 'Message', accessor: 'message' },
          { header: 'Resolved', accessor: 'resolved' },
        ]}
        data={inquiries}
      />
      <div className="mt-2">
        {inquiries.map((inq) => (
          <button key={inq.id} onClick={() => toggleResolved(inq)} className="text-sm underline mr-2">
            Mark {inq.resolved ? 'unresolved' : 'resolved'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactInquiriesPage;
