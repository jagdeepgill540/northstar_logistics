import { Metadata } from 'next';
import BlogMain from '@/views/blog/blog';

export const metadata: Metadata = {
  title: 'Northstar - Blog Page',
};

const BlogPage = () => {
  return <BlogMain />;
};
export default BlogPage;
