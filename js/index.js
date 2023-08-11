import { preloadImage } from "./utils.js";

const triggerFlipOnScroll = (galleryEl, options) => {
  const default_settings = {
    flip: {
      absoluteOnLeave: false,
      absolute: false,
      scale: true,
      simple: true,
    },
    scrollTrigger: {
      start: "center center",
      end: "+=300%",
    },
  };
  const settings = Object.assign({}, default_settings, options);

  const galleryCaption = galleryEl.querySelector(".caption");
  const galleryItem = galleryEl.querySelector(".gallery__item");
  const galleryItemInner = [...galleryItem]
    .map((item) => (item.children.length > 0 ? [...item.children] : []))
    .flat();

  galleryEl.classList.add("gallery--switch");
  const flipState = Flip.getState([galleryItems, galleryCaption], {
    props: "filter, opacity",
  });

  galleryEl.classList.remove("gallery--switch");
};

const scroll = () => {
  const galleries = [
    {
      id: "#gallery-1",
      options: {
        flip: {
          absoluteOnLeave: true,
          scale: false,
        },
      },
    },
  ];

  galleries.forEach((gallery) => {
    const galleryElement = document.querySelector(gallery.id);
    triggerFlipOnScroll(galleryElement, gallery.options);
  });
};

preloadImage(".gallery__item").then(() => {
  scroll(), document.body.classList.remove("loading");
});
