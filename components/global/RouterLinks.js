import { useRouter } from 'next/router';
import { Link } from '@material-ui/core';

const RouterLink = ({ href, color, text }, props) => {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Link href={href} color={color} {...props} onClick={handleLinkClick}>
      {text}
    </Link>
  );
};

export default RouterLink;
