import { Metadata } from 'next';
import BlogRightSidebarMain from '@/views/blog-sidebar/blog-right-sidebar';

export const metadata: Metadata = {
  title: 'Northstar - Blog Sidebar Page',
};

const BlogRightSidebarPage = () => {
  return <BlogRightSidebarMain />;
};

export default BlogRightSidebarPage;
