import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Maximizing Your Property's Rental Income in 2025",
    excerpt: "Learn the latest strategies and market trends to optimize your property's earning potential in the current market.",
    image: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg",
    author: "Maria Petrova",
    date: "March 15, 2025",
    category: "Property Management"
  },
  {
    id: 2,
    title: "Essential Amenities That Attract Premium Guests",
    excerpt: "Discover which amenities and features can help your property stand out and command higher rates in today's competitive market.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    author: "Stefan Ivanov",
    date: "March 10, 2025",
    category: "Interior Design"
  },
  {
    id: 3,
    title: "The Impact of Smart Home Technology on Rental Properties",
    excerpt: "Explore how smart home features can enhance guest experience and streamline property management operations.",
    image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    author: "Elena Dimitrova",
    date: "March 5, 2025",
    category: "Technology"
  }
];

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Property Management Insights"
        subtitle="Expert advice and industry updates to help you succeed in property management"
        bgImage="https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg"
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-dark px-3 py-1 bg-primary-light/10 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to="#"
                      className="text-primary font-medium flex items-center gap-1 hover:text-primary-dark transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;