import Link from 'next/link';

interface CustomLinkProps {
  url: string;
  newTab?: boolean;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ url, newTab, children }) => {
  const isInternalLink = url?.startsWith('/');

  // For internal links, use the Next.js Link component
  if (isInternalLink)
    return (
      <Link href={url}>
        <a>{children}</a>
      </Link>
    );

  if (!url) return <>{children}</>;

  // Plain <a> tags for external links
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={url}
      // Change target and rel attributes is newTab is turned on
      rel={newTab ? 'noopener noreferrer' : ''}
      target={newTab ? '_blank' : '_self'}>
      {children}
    </a>
  );
};

export default CustomLink;
