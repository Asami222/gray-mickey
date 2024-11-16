
import Image from 'next/image';

export const BlurImage1 = ({src,alt,width,height,sizes}) => {

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority
      />
    </>
  );
};

export const BlurImage2 = ({src,alt,width,height,sizes}) => {

    return (
      <>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority
        />
      </>
    );
};

  export const BlurImage3 = ({src,alt,sizes}) => {
  
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{objectFit: 'cover'}}
          priority
        />
      </>
    );
};

export const BlurImage4 = ({src,alt,sizes}) => {
  
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{objectFit: 'cover'}}
        />
      </>
    );
};