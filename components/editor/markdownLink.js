import { Link } from '@material-ui/core';

const markdownLink = (props) => {
  console.log(props);
  return (
    <Link variant='inherit' href='#' onClick={() => console.log(props)}>
      this is a link yay
    </Link>
  );
};

export default markdownLink;
