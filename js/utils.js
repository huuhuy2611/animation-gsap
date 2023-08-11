const preloadImage = (selector = "img") => {
  return new Promise((resolve) => {
    imageLoaded(document.querySelectorAll(selector));
  });
};

export { preloadImage };
