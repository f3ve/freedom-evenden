import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const RouterLink = ({ href, text, className }, props) => {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Button
      href={href}
      color='secondary'
      variant='contained'
      {...props}
      onClick={handleLinkClick}
      className={className}
    >
      {text}
    </Button>
  );
};

export default RouterLink;
