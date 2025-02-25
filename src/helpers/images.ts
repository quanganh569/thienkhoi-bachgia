import BASE_URL_STRAPI from "@/services/api/constants";

export const getImageThumb = (coverData: any) => {
  const formats = coverData?.formats;
  if (formats) {
    // if (formats?.thumbnail) {
    //   return getImagePath(formats?.thumbnail?.url);
    // }
    if (formats?.small) {
      return getImagePath(formats?.small?.url);
    }
    if (formats?.medium) {
      return getImagePath(formats?.medium?.url);
    }
    if (formats?.large) {
      return getImagePath(formats?.large?.url);
    }
  }
  return getImagePath(coverData?.url);
};

export const getImageLarge = (coverData: any) => {
  const formats = coverData?.formats;
  if (formats) {
    if (formats?.large) {
      return getImagePath(formats?.large?.url);
    }
    if (formats?.medium) {
      return getImagePath(formats?.medium?.url);
    }
  }
  return getImagePath(coverData?.url);
};

export const getImagePath = (url: any) => {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.origin !== BASE_URL_STRAPI) {
      return parsedUrl.pathname; // Remove the domain and return only the path
    } else {
      return `${BASE_URL_STRAPI}${parsedUrl.pathname}`;
    }
  } catch (error) {
    return `${BASE_URL_STRAPI}${url}`;
  }
}