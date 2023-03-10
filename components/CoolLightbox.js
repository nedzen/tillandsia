/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-spring-lightbox';
import styled from 'styled-components';
import { animated, useTransition } from '@react-spring/web';

/**
 * Double click + pinch to zoom
 * Keyboard Left/Right + swipe to page
 * Keyboard Esc to close
 *
 * @see https://github.com/tim-soft/react-spring-lightbox
 * @see https://timellenberger.com
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ImageOverlay = () => (
  <OverlayContainer>
    {/* <p>Create your own UI</p> */}
    {/* <FiPrinter size="3em" />
    <FiShare size="3em" />
    <FiHeart size="3em" /> */}
  </OverlayContainer>
);

const OverlayContainer = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  border: none;
  background: pink;
  p {
    color: transparent;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    margin: 0.5em 0;
  }
  svg {
    border: none;
    fill: transparent;
    margin: 10px;
    padding: 5px;
    :hover {
      border: none;
      fill: black;
      cursor: pointer;
    }
  }
`;

const CoolLightbox = ({
  images,
  currentImageIndex,
  setCurrentIndex,
  isOpen,
  onClose,
}) => {
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <StyledLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      onClose={onClose}
      images={images}
      currentIndex={currentImageIndex}
      singleClickToZoom
      renderHeader={() => (
        <LightboxHeader
          galleryTitle="Dark Mode: OS Level Control In Your CSS"
          images={images}
          currentIndex={currentImageIndex}
          onClose={onClose}
        />
      )}
      renderPrevButton={({ canPrev }) => (
        <ArrowButton position="left" onClick={gotoPrevious} disabled={!canPrev} />
      )}
      renderNextButton={({ canNext }) => (
        <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
      )}
      renderImageOverlay={() => <ImageOverlay />}
    />
  );
};

CoolLightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  currentImageIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CoolLightbox;

const StyledLightbox = styled(Lightbox)`
  background: hsla(1, 100%, 100%, .8);
  * ::selection { background: blue; }
  * ::-moz-selection { background: orange; }
`;


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LightboxHeader = ({ images, currentIndex, onClose }) => (
  <TopHeaderBar>
    <LeftSideDescriptionContainer>
      <GallerySubheading>{images[currentIndex].alt}</GallerySubheading>
    </LeftSideDescriptionContainer>

    <RightSideContainer>
      <PageIndicator>
        {currentIndex + 1} / {images.length}
      </PageIndicator>
      <button onClick={onClose} className="lightboxControls" type="button">
        X
      </button>
    </RightSideContainer>
  </TopHeaderBar>
);

LightboxHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const GallerySubheading = styled.h4`
  margin: 0;
  font-weight: normal;
  color: black;
  font-size: 1.2em;
`;

const PageIndicator = styled.span`
  white-space: nowrap;
  min-width: 60px;
  text-align: center;
`;

const RightSideContainer = styled.div`
  width: 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSideDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 8px 0 8px 10px;
`;

const TopHeaderBar = styled.header`
  z-index: 10;
  cursor: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 2px 10px 20px;
  color: black;
  font-size: 12px;
  background-color: none;
  > * {height: inherit;}
`;

const ArrowButton = ({ position, onClick, disabled }) => {
  const transitions = useTransition(!disabled, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (props, item) =>
      item && (
        <animated.div
          style={{
            ...props,
            zIndex: 999,
          }}
        >
          <button className='lightboxControls' style={{ position: {position} }} onClick={onClick} >
            {position === 'left' && "PREVIOUS"}
            {position === 'right' && "NEXT"}
          </button>

        </animated.div>
      )
  );
};

ArrowButton.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ArrowButton.defaultProps = {
  disabled: false,
};
