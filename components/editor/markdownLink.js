import { Link } from '@material-ui/core';

export default function markdownLink(props) {
  return (
    <Link variant='inherit' href='#' onClick={() => console.log(props)}>
      this is a link yay
    </Link>
  );
}
