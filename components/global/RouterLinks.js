import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

export default function RouterLink({ href, text, className }, props) {
  const router = useRouter();

  const handleLinkClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <Button
      href={href}
      color='primary'
      {...props}
      onClick={handleLinkClick}
      className={className}
    >
      {text}
    </Button>
  );
}
