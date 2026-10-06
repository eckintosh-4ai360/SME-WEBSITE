import photos from "../data/photos.json";

const files = import.meta.glob("../assets/photos/*.webp", { eager: true, import: "default" });
const url = (name, size) => files[`../assets/photos/${name}-${size}.webp`];

/**
 * Responsive, lazy-loaded photo with a blurred placeholder while it loads.
 * `sizes` should describe the rendered width so the browser picks the 800w or 1600w file.
 */
export default function Photo({ name, sizes = "100vw", priority = false, alt, position, className = "", style, ...rest }) {
  const p = photos[name];
  if (!p) {
    if (import.meta.env.DEV) console.warn(`Photo "${name}" is not in src/data/photos.json`);
    return null;
  }
  const lg = p.widths[1600];
  return (
    <img
      src={url(name, 1600)}
      srcSet={`${url(name, 800)} ${p.widths[800]}w, ${url(name, 1600)} ${lg}w`}
      sizes={sizes}
      width={lg}
      height={Math.round((lg * p.height) / p.width)}
      alt={alt ?? p.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`photo ${className}`}
      style={{
        backgroundImage: `url(${p.placeholder})`,
        ...(position && { objectPosition: position, backgroundPosition: position }),
        ...style,
      }}
      {...rest}
    />
  );
}
