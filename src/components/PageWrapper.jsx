import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    let isCancelled = false;

    const checkImages = () => {
      const images = Array.from(document.images);
      const allLoaded = images.every(img => img.complete);
      
      if (allLoaded) {
        if (!isCancelled) {
          // small buffer to ensure styles are painted
          setTimeout(() => {
            if (!isCancelled) setLoading(false);
          }, 300);
        }
      } else {
        if (!isCancelled) {
          setTimeout(checkImages, 100);
        }
      }
    };

    // Need a small timeout to let the new route components mount and add images to DOM
    setTimeout(checkImages, 50);

    return () => {
      isCancelled = true;
    };
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
