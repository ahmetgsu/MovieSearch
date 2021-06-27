export const getImageUrl = (path, size = 'w500') => {
  let imageUrl = `https://image.tmdb.org/t/p/${size}/${path}`;
  return imageUrl;
};
