import Image from 'next/image';
import Link from 'next/link';
import BlogItemOne from './blog-item/blog-item-one';
import { blogDataOne } from '@/data/blog-data';

import shapeImg from '@/assets/img/shape/blog-shape-2-1.png';

interface BlogProps {
  itemClass?: string;
  hasShape?: boolean;
}

const BlogThree = ({ itemClass, hasShape }: BlogProps) => {
  return (
    <div
      id="blog"
      className={itemClass || 'it-blog-area p-relative pt-130 pb-130'}
    >
      {hasShape && (
        <Image
          className="it-blog-shape-1 image-height-auto"
          src={shapeImg}
          alt="shape-img"
          width={1920}
          height={627}
        />
      )}

      <div className="container">
        <div className="it-blog-top-wrap pb-65">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle">Blog Post</span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  Read All Our <br />
                  Logistics Blogs
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="it-blog-btn text-lg-end it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange" href="/blog">
                  <span>View All News</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogDataOne
            .map((blog, i) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay={`${0.3 + 0.2 * i}s`}
              >
                <BlogItemOne blog={blog} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default BlogThree;
