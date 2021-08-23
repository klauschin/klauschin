import HeadMeta from '@/components/HeadMeta';
import { PortableText } from '@/lib/sanity';

export default function HomePage({ mainData }) {
  const { title, content } = mainData;
  return (
    <>
      <HeadMeta title={title} description="Klaus Chin Site" />
      <div className="home-page f-h">
        <PortableText blocks={content} />
      </div>
      <style global jsx>{`
        .home-page {
        }
      `}</style>
    </>
  );
}
