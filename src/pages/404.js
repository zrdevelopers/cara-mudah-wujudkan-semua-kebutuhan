'use client';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" legacyBehavior>
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
