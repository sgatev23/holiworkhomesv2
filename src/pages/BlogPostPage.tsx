import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ThumbsUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import supabase from '../supabaseclient';
import { Helmet } from 'react-helmet-async';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState<number>(0);

  const shareUrl = `https://nomadica.homes/blog/${slug}`;
  const shareTitle = lang === 'bg' ? post?.title_bg : post?.title;

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .limit(1)
        .maybeSingle();

      if (error || !data) {
        console.error('Post fetch error:', error);
        navigate('/blog');
      } else {
        setPost(data);
        setLoading(false);
        // Optional: setLikes(data.likes || 0);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    // TODO: save to Supabase with update query
  };

  if (loading || !post) {
    return <div className="text-center py-20">Loading post...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{lang === 'bg' ? post.title_bg : post.title} | Nomadica Blog</title>
        <meta name="description" content={lang === 'bg' ? post.excerpt_bg : post.excerpt} />
        <meta property="og:title" content={lang === 'bg' ? post.title_bg : post.title} />
        <meta property="og:description" content={lang === 'bg' ? post.excerpt_bg : post.excerpt} />
        <meta property="og:image" content={post.cover_image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={lang === 'bg' ? post.title_bg : post.title} />
        <meta name="twitter:description" content={lang === 'bg' ? post.excerpt_bg : post.excerpt} />
        <meta name="twitter:image" content={post.cover_image} />
      </Helmet>

      <Layout>
        {/* Header */}
        <div
          className="h-[350px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
          style={{
            backgroundImage: `url(${post.cover_image})`,
          }}
        >
          <div className="bg-black/50 p-6 rounded-xl max-w-3xl">
            <h1 className="text-4xl font-bold mb-2">
              {lang === 'bg' ? post.title_bg : post.title}
            </h1>
            <p className="text-sm flex justify-center gap-4 text-gray-300">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container max-w-3xl px-4">
            <div className="prose prose-lg max-w-none mb-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: lang === 'bg' ? post.content_bg : post.content,
                }}
              />
            </div>

            {/* Share + Like Buttons */}
<div className="flex flex-wrap justify-center gap-4 items-center mb-6">
  <FacebookShareButton url={shareUrl}><FacebookIcon size={40} round /></FacebookShareButton>
  <TwitterShareButton url={shareUrl} title={shareTitle}><TwitterIcon size={40} round /></TwitterShareButton>
  <LinkedinShareButton url={shareUrl} title={shareTitle}><LinkedinIcon size={40} round /></LinkedinShareButton>
  <WhatsappShareButton url={shareUrl} title={shareTitle}><WhatsappIcon size={40} round /></WhatsappShareButton>

  {/* Viber Button (custom icon link) */}
  <a
    href={`viber://forward?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full"
  >
    <img
      src="https://wphhabpebydwwvgqtwmw.supabase.co/storage/v1/object/public/blog-images//viber-logo-png_seeklogo-309904.png"
      alt="Share on Viber"
      style={{ width: 40, height: 40, borderRadius: '50%' }}
    />
  </a>

</div>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPostPage;
