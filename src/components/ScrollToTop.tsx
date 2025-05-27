import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPath = prevPathRef.current;

    // Scroll only if user navigated to a new page
    if (prevPath !== pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update the ref for next comparison
    prevPathRef.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
