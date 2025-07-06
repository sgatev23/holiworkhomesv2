import { useEffect, useState } from 'react';
import supabase from '../supabaseclient';
import PaginatedTable from './PaginatedTable';

interface CalcEmail {
  id: string;
  email: string;
  created_at: string;
}

const CalculatorEmailsPage = () => {
  const [emails, setEmails] = useState<CalcEmail[]>([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const { data } = await supabase.from('calculator_emails').select('*');
      if (data) setEmails(data);
    };
    fetchEmails();
  }, []);

  const exportCsv = () => {
    const rows = ['email,created_at', ...emails.map((e) => `${e.email},${e.created_at}`)];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'calculator_emails.csv');
    link.click();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calculator Emails</h2>
      <button onClick={exportCsv} className="mb-4 px-2 py-1 bg-primary text-white rounded">Export CSV</button>
      <PaginatedTable
        columns={[
          { header: 'Email', accessor: 'email' },
          { header: 'Created', accessor: 'created_at' },
        ]}
        data={emails}
      />
    </div>
  );
};

export default CalculatorEmailsPage;
