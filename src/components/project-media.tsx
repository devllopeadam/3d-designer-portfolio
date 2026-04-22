import Image from "next/image";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".ogg"];

export const isVideoMedia = (src: string) => {
  const normalizedSrc = src.toLowerCase().split("?")[0];
  return VIDEO_EXTENSIONS.some((extension) =>
    normalizedSrc.endsWith(extension)
  );
};

const isGifMedia = (src: string) => src.toLowerCase().split("?")[0].endsWith(".gif");

type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
};

const ProjectMedia = ({
  src,
  alt,
  className,
  width = 1200,
  height = 800,
  fill = false,
  priority = false,
  sizes,
  controls = false,
  autoPlay = false,
  loop = false,
  muted = true,
  preload = "metadata",
}: ProjectMediaProps) => {
  if (isVideoMedia(src)) {
    return (
      <video
        src={src}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        preload={preload}
      />
    );
  }

  if (isGifMedia(src)) {
    return <img src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} />;
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
};

export default ProjectMedia;