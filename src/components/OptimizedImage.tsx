import { useRef, useState, useEffect, type ImgHTMLAttributes } from "react";
import { responsivePhoto, alt as getAlt, type ImageKey } from "../data/images";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes" | "alt"> {
  /** Image key from the images data */
  imageKey: ImageKey;
  /** Target width for the image (default: 900) */
  width?: number;
  /** Responsive sizes attribute (default: auto-calculated) */
  sizes?: string;
  /** Whether this is a hero/critical image (loads eagerly) */
  priority?: boolean;
  /** Custom alt text override */
  altText?: string;
}

/**
 * OptimizedImage renders a plain <img> with srcset, sizes, and lazy loading.
 * It does NOT wrap in a div — existing CSS selectors like `.card img` still work.
 * Uses the native browser lazy loading + IntersectionObserver as a backup.
 */
export function OptimizedImage({
  imageKey,
  width = 900,
  sizes,
  priority = false,
  altText,
  style,
  ...rest
}: OptimizedImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  const { src, srcSet, sizes: defaultSizes } = responsivePhoto(imageKey, width, sizes);
  const altValue = altText ?? getAlt(imageKey);

  // IntersectionObserver as backup for browsers with poor native lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const el = imgRef.current;
    if (!el) return;

    // If browser supports native lazy loading and element is far from viewport, rely on it
    if ("loading" in HTMLImageElement.prototype) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, isInView]);

  const loading = priority ? "eager" : "lazy";
  const decoding = priority ? "sync" : "async";

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes ?? defaultSizes}
      alt={altValue}
      loading={loading}
      decoding={decoding}
      onLoad={() => setIsLoaded(true)}
      style={{
        opacity: isLoaded ? 1 : 0.6,
        transition: "opacity 0.4s ease",
        ...style,
      }}
      {...rest}
    />
  );
}
