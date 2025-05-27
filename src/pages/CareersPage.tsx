import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Users, Lightbulb, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import supabase from '../supabaseclient';

const CareersPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [jobPosts, setJobPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from('jobs').select('*');
      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobPosts(data);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Layout>
      <PageHeader
        title={t('careers.header')}
        subtitle={t('careers.subtitle')}
        bgImage="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      {/* Values Section */}
      <section className="bg-[#fff8e1] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#815159] mb-6">{t('careers.why')}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">{t('careers.whyText')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="flex flex-col items-start">
              <Users className="w-8 h-8 text-[#815159] mb-3" />
              <h3 className="font-semibold text-[#815159] text-lg">{t('careers.values.impact.title')}</h3>
              <p className="text-sm text-gray-700 mt-2">{t('careers.values.impact.desc')}</p>
            </div>
            <div className="flex flex-col items-start">
              <Lightbulb className="w-8 h-8 text-[#815159] mb-3" />
              <h3 className="font-semibold text-[#815159] text-lg">{t('careers.values.ownership.title')}</h3>
              <p className="text-sm text-gray-700 mt-2">{t('careers.values.ownership.desc')}</p>
            </div>
            <div className="flex flex-col items-start">
              <Globe className="w-8 h-8 text-[#815159] mb-3" />
              <h3 className="font-semibold text-[#815159] text-lg">{t('careers.values.remote.title')}</h3>
              <p className="text-sm text-gray-700 mt-2">{t('careers.values.remote.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#815159] mb-12">{t('careers.openRoles')}</h2>

          {jobPosts.map((job) => (
            <div key={job.slug} className="border border-gray-200 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-[#815159]">
                  {i18n.language === 'bg' ? job.title_bg : job.title_en}
                </h3>
                <span className="text-sm text-gray-600 mt-2 md:mt-0">{job.location} · {job.type}</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                {i18n.language === 'bg' ? job.summary_bg : job.summary_en}
              </p>
              <Link
                to={`/careers/${job.slug}`}
                className="inline-block bg-[#815159] text-white py-2 px-5 rounded-md text-sm hover:bg-[#6e444b] transition"
              >
                {t('careers.learnMore')}
              </Link>
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm">{t('careers.noPerfectFit')}</p>
            <a
              href="/contact"
              className="text-[#815159] underline font-medium hover:text-[#6e444b] transition"
            >
              {t('careers.reachOut')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
