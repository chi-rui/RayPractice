/**
 * 
 * @param {string} url 
 * @param {string} title 
 * @param {string} media 
 * @returns {void}
 */
const shareToPinterest = (url, title, media) => {
  const shareUrl = `https://www.pinterest.com/pin/create/button/?url=${url}&description=${title}`;
  document.getElementById("share-pinterest").setAttribute("href", shareUrl);
};

/**
 * Share to Twitter
 * @returns {void}
 */
const buildShare = () => {
  const shareUrl = "https://www.google.com/";
  const shareTitle = "";
  const shareMedia = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  
  shareToPinterest(shareUrl, shareTitle, shareMedia);
};

// reference: https://gist.github.com/apisandipas/74d396c7853b93f5f861091a2135d527