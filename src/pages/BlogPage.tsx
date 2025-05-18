import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import supabase from '../supabaseclient';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const BlogPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [posts, setPosts] = useState<any[]>([]);
  const lang = i18n.language;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('date', { ascending: false });

      if (!error) setPosts(data);
      else console.error(error);
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <PageHeader
        title={
          lang === 'bg'
            ? 'Блог за управление на имоти'
            : 'Property Management Insights'
        }
        subtitle={
          lang === 'bg'
            ? 'Съвети и новини от индустрията, които ви помагат в управлението на Вашия имот.'
            : 'Expert advice and industry updates to help you succeed in property management'
        }
        bgImage="https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg"
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.cover_image}
                  alt={lang === 'bg' ? post.title_bg : post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {lang === 'bg' ? post.title_bg : post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {lang === 'bg' ? post.excerpt_bg : post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-dark px-3 py-1 bg-primary-light/10 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary font-medium flex items-center gap-1 hover:text-primary-dark transition-colors"
                    >
                      {lang === 'bg' ? 'Прочети още' : 'Read More'}{' '}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              {lang === 'bg' ? 'Зареди още статии' : 'Load More Articles'}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
