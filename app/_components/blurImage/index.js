"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from "./index.module.css"

export const BlurImage1 = ({src,alt,width,height}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
        onLoadingComplete={() => setIsImageLoaded(true)}
      />
    </>
  );
};

export const BlurImage2 = ({src,alt,width,height,sizes}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
  
    return (
      <>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
          priority
        />
      </>
    );
};

  export const BlurImage3 = ({src,alt,sizes}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
  
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{objectFit: 'cover'}}
          className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
          priority
        />
      </>
    );
};

export const BlurImage4 = ({src,alt,sizes}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
  
    return (
      <>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{objectFit: 'cover'}}
          className={`${isImageLoaded ? styles.removeBlur : styles.blur}`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      </>
    );
};