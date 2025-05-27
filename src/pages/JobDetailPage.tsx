import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Briefcase, MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import supabase from '../supabaseclient';

interface JobPost {
    title_en: string;
    title_bg: string;
    overview_en: string;
    overview_bg: string;
    responsibilities_en: string[];
    responsibilities_bg: string[];
    requirements_en: string[];
    requirements_bg: string[];
    perks_en: string[];
    perks_bg: string[];
    type: string;
    location: string;
    salary: string;
}

const JobDetailPage: React.FC = () => {
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    const [job, setJob] = useState<JobPost | null>(null);
    const lang = i18n.language;

    useEffect(() => {
        const fetchJob = async () => {
            const { data, error } = await supabase
                .from('jobs')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) {
                console.error('Error fetching job:', error);
            } else {
                setJob(data);
            }
        };

        if (slug) fetchJob();
    }, [slug]);

    const getText = (base: string): string => {
        return (job?.[`${base}_${lang}`] as string) || '';
    };

    const getList = (base: string): string[] => {
        return (job?.[`${base}_${lang}`] as string[]) || [];
    };

    if (!job) {
        return (
            <Layout>
                <PageHeader title={t('careersDetail.notFound.title')} />
                <div className="text-center py-20">
                    <p>{t('careersDetail.notFound.description')}</p>
                    <Link to="/careers" className="text-[#815159] underline">
                        {t('careersDetail.notFound.back')}
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageHeader
                title={getText('title')}
                subtitle={`${job.location} · ${job.type} · ${job.salary}`}
                bgImage="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />

            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-16">

                    {/* Quick Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div><Briefcase className="mx-auto text-[#815159]" /><p className="mt-2 text-sm text-gray-600">{job.type}</p></div>
                        <div><MapPin className="mx-auto text-[#815159]" /><p className="mt-2 text-sm text-gray-600">{job.location}</p></div>
                        <div><Clock className="mx-auto text-[#815159]" /><p className="mt-2 text-sm text-gray-600">{t('careersDetail.quick.open')}</p></div>
                    </div>

                    {/* Overview */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#815159] mb-4">{t('careersDetail.sections.overview')}</h2>
                        <p className="text-gray-700">{getText('overview')}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#815159] mb-4">{t('careersDetail.sections.role')}</h2>
                        <ul className="space-y-3">
                            {getList('responsibilities').map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-[#815159] mr-2 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#815159] mb-4">{t('careersDetail.sections.requirements')}</h2>
                        <ul className="space-y-3">
                            {getList('requirements').map((item, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-[#815159] mr-2 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Perks */}
                    <div className="bg-[#fff8e1] p-6 rounded-xl">
                        <h2 className="text-2xl font-semibold text-[#815159] mb-4">{t('careersDetail.sections.perks')}</h2>
                        <ul className="space-y-3">
                            {getList('perks').map((item, i) => (
                                <li key={i} className="flex items-start text-gray-800">
                                    <Star className="w-5 h-5 text-[#815159] mr-2 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="bg-[#815159] text-white text-center py-10 px-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">{t('careersDetail.sections.cta.title')}</h3>
                        <p className="text-sm mb-4">{t('careersDetail.sections.cta.subtitle')}</p>
                        <a
                            href={`mailto:apply@nomadica.homes?subject=Apply: ${encodeURIComponent(getText('title'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#815159] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                        >
                            {t('careersDetail.sections.cta.button')}
                        </a>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default JobDetailPage;
