import Link from "next/link";

export type FeaturedContentType = {
  title: string;
  description: string;
  href: string;
  label: string;
  active?: boolean;
};

interface FeaturedContentProps {
  content: FeaturedContentType;
}

const FeaturedContent = ({ content }: FeaturedContentProps) => {
  return (
    <div className="relative w-full p-2 bg-neutral-800 border border-neutral-700 h-fit space-y-5">
      {!content.active && (
        <div className="absolute top-0 left-0 rounded-sm h-full w-full z-50 backdrop-blur-md" />
      )}
      <div className="space-y-2">
        <h3 className="text-sm text-white border-b border-neutral-700 pb-1">
          {content.title}
        </h3>
        <p className="text-sm text-muted-foreground">{content.description}</p>
      </div>
      <Link href={content.href} className="block text-white underline">
        {content.label}
      </Link>
    </div>
  );
};

export default FeaturedContent;
