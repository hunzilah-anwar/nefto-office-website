import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    let isCancelled = false;
    let fallbackTimeout;

    const checkImages = () => {
      if (isCancelled) return;
      const images = Array.from(document.images);
      const allLoaded = images.every(img => img.complete);
      
      if (allLoaded) {
        clearTimeout(fallbackTimeout);
        setTimeout(() => {
          if (!isCancelled) setLoading(false);
        }, 150);
      } else {
        setTimeout(checkImages, 100);
      }
    };

    // Maximum wait time of 1.2 seconds so users don't stare at the loader forever
    fallbackTimeout = setTimeout(() => {
      if (!isCancelled) setLoading(false);
    }, 1200);

    // Initial check
    setTimeout(checkImages, 50);

    return () => {
      isCancelled = true;
      clearTimeout(fallbackTimeout);
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
