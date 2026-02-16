import { useEffect, useState } from 'react';

export const useImagePreloader = (images: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let imagesLoaded = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setLoaded(true);
      return;
    }

    const onImageLoad = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setLoaded(true);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = onImageLoad;
      img.onerror = onImageLoad; // Continue even if one fails
    });
  }, [images]);

  return loaded;
};
