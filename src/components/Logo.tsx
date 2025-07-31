import { useEffect, useState } from 'react';
import { logoLight, logoDark } from '../assets';

export function Logo() {
  const [logoSrc, setLogoSrc] = useState(logoLight);

  useEffect(() => {
    const updateLogo = () => {
      const mode = document.documentElement.getAttribute('data-color-scheme');
      setLogoSrc(mode === 'dark' ? logoDark : logoLight);
    };

    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-color-scheme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={logoSrc}
      alt="desKI logo"
      className="w-48 md:w-64 lg:w-72"
    />
  );
}