export const getOptimizedAssetSrc = (src) => {
  if (!src?.startsWith("/assets/") || src.includes("/optimized/")) {
    return src;
  }

  return src
    .replace("/assets/", "/assets/optimized/")
    .replace(/\.(jpe?g|png|webp)$/i, ".webp");
};

export const getInspirationCoverSrc = (src) => {
  if (!src?.startsWith("/assets/ispirazioni/") || src.includes("/covers/")) {
    return src;
  }

  return src.replace("/assets/ispirazioni/", "/assets/ispirazioni/covers/");
};

export const getInspirationLightboxSrc = (src) => {
  if (!src?.startsWith("/assets/ispirazioni/") || src.includes("/lightbox/")) {
    return src;
  }

  return src.replace("/assets/ispirazioni/", "/assets/ispirazioni/lightbox/");
};
