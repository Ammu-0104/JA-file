import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function JobBreadcrumbs() {
  return (
    <div className='switchcontainer' role="presentation" onClick={handleClick}>
      <Breadcrumbs
        maxItems={10}
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}>
        <Link to="/main/joblisting">
          Home
        </Link>
        <Link to="/main/MyActivity">
          MyActivity
        </Link>
        <Link to="">
          Job
        </Link>
      </Breadcrumbs>
    </div>
  );
}