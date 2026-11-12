import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Global Scroll Restoration component.
 * - On new page navigation ("PUSH" / "REPLACE"): Instantly scrolls to top (0, 0).
 * - On Hash anchors (#id): Smoothly scrolls to the targeted element on the page.
 * - On Browser Back/Forward ("POP"): Preserves natural reading position on desktop history navigation.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (hash) {
      try {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } catch {
        // Fall through to standard scroll if selector is invalid
      }
    }

    if (navType === 'POP') {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, navType]);

  return null;
}
