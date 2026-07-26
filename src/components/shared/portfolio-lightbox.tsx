"use client";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface Slide {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface PortfolioLightboxProps {
  open: boolean;
  index: number;
  slides: Slide[];
  onClose: () => void;
}

export function PortfolioLightbox({ open, index, slides, onClose }: PortfolioLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Captions]}
      captions={{ showToggle: false, descriptionTextAlign: "center" }}
      controller={{ closeOnBackdropClick: true }}
      animation={{ fade: 300 }}
      carousel={{ finite: false }}
    />
  );
}
