import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HomeownerIntro: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-left"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {t('servicesPage.intro.title')}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
                    {t('servicesPage.intro.body')}
                </p>

                <div className="mt-6 h-1 w-24 bg-[#f9cf94] rounded" />
            </motion.div>
        </section>
    );
};

export default HomeownerIntro;