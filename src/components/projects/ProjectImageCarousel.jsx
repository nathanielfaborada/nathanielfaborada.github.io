import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExpandIcon,
  CloseIcon,
} from '../common/Icons';
import './ProjectImageCarousel.css';

export default function ProjectImageCarousel({
  images = [],
  title = 'Project Screenshot',
}) {
  const imagesList = React.useMemo(() => {
    if (!images) return [];
    if (Array.isArray(images)) {
      return images.filter(
        (img) => typeof img === 'string' && img.trim().length > 0
      );
    }
    if (typeof images === 'string' && images.trim().length > 0) {
      return [images.trim()];
    }
    return [];
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = useRef(null);
  const expandButtonRef = useRef(null);

  useEffect(() => {
    if (currentIndex >= imagesList.length) {
      setCurrentIndex(0);
    }
  }, [imagesList.length, currentIndex]);

  const handleNext = useCallback(() => {
    if (imagesList.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % imagesList.length);
  }, [imagesList.length]);

  const handlePrev = useCallback(() => {
    if (imagesList.length <= 1) return;
    setCurrentIndex(
      (prev) => (prev - 1 + imagesList.length) % imagesList.length
    );
  }, [imagesList.length]);

  const openLightbox = () => {
    if (!failedImages[currentIndex]) {
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    if (expandButtonRef.current) {
      expandButtonRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    function handleLightboxKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    }

    document.addEventListener('keydown', handleLightboxKeyDown);
    return () => {
      document.removeEventListener('keydown', handleLightboxKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, handleNext, handlePrev]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (e.target === e.currentTarget) {
        e.preventDefault();
        openLightbox();
      }
    }
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  if (imagesList.length === 0) {
    return (
      <div className="carousel-container">
        <div className="carousel-fallback">
          <span className="carousel-fallback-text">{title}</span>
        </div>
      </div>
    );
  }

  const hasMultiple = imagesList.length > 1;
  const activeUrl = imagesList[currentIndex];

  return (
    <>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${title} screenshot gallery`}
      >
        <div className="carousel-slides-wrapper">
          {imagesList.map((url, index) => {
            const isActive = index === currentIndex;
            const isError = failedImages[index];

            return (
              <div
                key={`${url}-${index}`}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                {!isError ? (
                  <img
                    src={url}
                    alt={`${title} screenshot ${index + 1}`}
                    className="carousel-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 || isActive ? 'high' : 'auto'}
                    decoding="async"
                    onClick={openLightbox}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="carousel-fallback">
                    <span className="carousel-fallback-text">
                      {title}: Slide {index + 1}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!failedImages[currentIndex] && (
          <button
            ref={expandButtonRef}
            type="button"
            className="carousel-expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              openLightbox();
            }}
            aria-label={`Expand ${title} screenshot ${currentIndex + 1}`}
            title="Expand screenshot"
          >
            <ExpandIcon size={15} />
          </button>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              className="carousel-nav-btn carousel-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous screenshot"
              title="Previous screenshot"
            >
              <ChevronLeftIcon size={18} />
            </button>

            <button
              type="button"
              className="carousel-nav-btn carousel-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next screenshot"
              title="Next screenshot"
            >
              <ChevronRightIcon size={18} />
            </button>
          </>
        )}

        {hasMultiple && (
          <div className="carousel-counter">
            {currentIndex + 1} / {imagesList.length}
          </div>
        )}

        {hasMultiple && (
          <div className="carousel-pagination">
            {imagesList.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${
                  index === currentIndex ? 'active' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isLightboxOpen && activeUrl && (
        <div
          className="carousel-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full-size screenshot preview`}
        >
          <div
            className="carousel-lightbox-backdrop"
            onClick={closeLightbox}
          />
          <div className="carousel-lightbox-content">
            <button
              type="button"
              className="carousel-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close full-size preview"
            >
              <CloseIcon size={20} />
            </button>

            {hasMultiple && (
              <button
                type="button"
                className="carousel-nav-btn carousel-nav-prev"
                onClick={handlePrev}
                aria-label="Previous screenshot"
              >
                <ChevronLeftIcon size={20} />
              </button>
            )}

            <img
              src={activeUrl}
              alt={`${title} screenshot ${currentIndex + 1}`}
              className="carousel-lightbox-img"
            />

            {hasMultiple && (
              <button
                type="button"
                className="carousel-nav-btn carousel-nav-next"
                onClick={handleNext}
                aria-label="Next screenshot"
              >
                <ChevronRightIcon size={20} />
              </button>
            )}

            {hasMultiple && (
              <div className="carousel-counter">
                {currentIndex + 1} / {imagesList.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
