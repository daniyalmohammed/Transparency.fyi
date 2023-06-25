import React, { useEffect } from 'react';

const RedirectExample = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace('http://localhost:8080/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
};

const SuccessPage = () => {
  RedirectExample();
  return <div className="verify-humanity">Verifying Humanity...</div>;
};

export default SuccessPage;
