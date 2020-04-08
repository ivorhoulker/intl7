/* eslint-disable react/display-name */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { usePageContext } from '../page-context';

const Link = React.forwardRef(({ to, ...rest }, ref) => {
  const { langUrl } = usePageContext();

  return <GatsbyLink {...rest} ref={ref} to={langUrl ? `/${langUrl}${to}` : to} />;
});

export default Link;
