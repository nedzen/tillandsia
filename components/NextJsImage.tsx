import Image, { StaticImageData } from 'next/image';
import type { Slide, ContainerRect } from 'yet-another-react-lightbox';

export default function NextJsImage(
  slide: Slide,
  offset: number,
  rect: ContainerRect
) {
  const image = slide as StaticImageData;

  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width)
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height)
  );

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt=""
        src={image}
        loading="eager"
        placeholder="blur"
        draggable={false}
        sizes={
          typeof window !== 'undefined'
            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
            : `${width}px`
        }
      />
    </div>
  );
}
