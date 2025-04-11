import { useEffect, useState } from 'react';

export function changeHeaderOpacity(triggerOffset = window.innerHeight / 2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > triggerOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerOffset]);

  return isVisible;
}