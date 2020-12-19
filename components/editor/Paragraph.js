import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(4),
    fontSize: 20,
  },
}));

export default function Paragraph(props) {
  const styles = useStyles();
  return (
    <Typography
      variant="body1"
      component="p"
      gutterBottom
      className={styles.paragraph}
    >
      {props.node.children.map((child) => {
        if (child.type === 'link') {
          return (
            <Link href={child.url} color="secondary">
              {child.children[0] ? child.children[0].value : ''}
            </Link>
          );
        }
        if (child.type === 'emphasis') {
          return (
            <i>
              {child.children.length > 0 ? child.children[0].value : ''}
              {child.children.length > 0 && child.children[0].children ? (
                <strong>{child.children[0].children[0].value}</strong>
              ) : (
                ''
              )}
            </i>
          );
        }
        if (child.type === 'strong') {
          return (
            <strong>
              {child.children.length > 0 ? child.children[0].value : ''}
              {child.children.length > 0 && child.children[0].children ? (
                <i>{child.children[0].children[0].value}</i>
              ) : (
                ''
              )}
            </strong>
          );
        }
        return child.value;
      })}
    </Typography>
  );
}
