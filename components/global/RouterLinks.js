import { useRouter } from 'next/router';
import { Link } from '@material-ui/core';

const RouterLink = ({ href, color, text, className, variant }, props) => {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Link
      href={href}
      color={color}
      {...props}
      onClick={handleLinkClick}
      className={className}
      variant={variant}
    >
      {text}
    </Link>
  );
};

export default RouterLink;
