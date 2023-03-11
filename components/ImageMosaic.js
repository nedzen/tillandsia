/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NextImage from 'next/image';

// const ImageMosaic = ({ images, handleClick }) => (
//   <GalleryContainer>
//     <Gallery
//       columns={(containerWidth) => {
//         let columns = 1;
//         if (containerWidth >= 500) columns = 2;
//         if (containerWidth >= 900) columns = 3;

//         return columns;
//       }}
//       onClick={handleClick}
//       photos={images}
//       margin={6}
//       direction="column"
//       renderImage={GridImage}
//     />
//   </GalleryContainer>
// );

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const Timg = ({ key, photos, onClick }) => {
  const { height, width, src, alt, caption } = photos;
  let index = 2;
  return (
    <div key={`${key}-${index}`} index={index}>
      <NextImage
        blurDataURL={blurIMG}
        onClick={(e) => onClick(e, { key })}
        placeholder="blur"
        width={width}
        height={height}
        layout="responsive"
        priority
        src={src}
        alt={alt}
        caption={caption}
      />
      <h4>{caption}</h4>
    </div>
  );
};

const ImageMosaic = ({ images, handleClick }) => {
  let total = images.length;
  return (
    <>
      {images.map((item, i) => (
        <Timg key={i} index={total} onClick={handleClick} photos={item} />
      ))}
    </>
  );
};

// ImageMosaic.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       alt: PropTypes.string.isRequired,
//       caption: PropTypes.string.isRequired,
//       height: PropTypes.number.isRequired,
//       width: PropTypes.number.isRequired,
//       src: PropTypes.string.isRequired,
//     })
//   ),
//   handleClick: PropTypes.func.isRequired,
// };
const blurIMG = 'https://www.mariusnedelcu.com/images/kitty.jpeg';
export default ImageMosaic;

// const GalleryContainer = styled.div`
//   overflow-y: auto;
//   height: 100%;
//   max-height: calc(100% - 4em);
//   padding: 0em;
// `;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// const ImageMosmaic = ({ key, index, left, top, photo, onClick }) => {
//   const { height, width, src, alt, caption } = photo;
//   return (
//     <div key={`${key}-${index}`} index={index} >
//       <NextImage
//         blurDataURL={blurIMG}
//         onClick={(e) => onClick(e, { index })}
//         placeholder="blur"
//         width={width}
//         height={height}
//         layout="responsive"
//         priority
//         src={src}
//         alt={alt}
//         caption={caption}
//       />
//       <h4>{caption}</h4>
//     </div>
//   );
// };

// GridImage.propTypes = {
//   key: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   left: PropTypes.number.isRequired,
//   top: PropTypes.number.isRequired,
//   containerHeight: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
//   photo: PropTypes.shape({
//     alt: PropTypes.string.isRequired,
//     caption: PropTypes.string.isRequired,
//     height: PropTypes.number.isRequired,
//     width: PropTypes.number.isRequired,
//     src: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const Caption = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   background: hsla(1, 100%, 100%, 0.8);
//   color: black;
//   h4 {
//     text-align: center;
//     font-size: 12px;
//     margin: 1em 0;
//   }
// `;

// const OverlayContainer = styled.div`
//   position: relative;
//   height: 100%;
//   overflow: hidden;
// `;

// const ImageContainer = styled.div`
//   transition: border-color 0.2s linear;
//   display: block;
//   position: absolute;
//   cursor: pointer;
//   border-width: 2px;
//   border-color: transparent;
//   border-style: solid;
//   :hover {
//     border-color: pink;
//   }
// `;

// const Image = styled.img`
//   width: inherit;
//   height: inherit;
//   position: absolute;
// `;
