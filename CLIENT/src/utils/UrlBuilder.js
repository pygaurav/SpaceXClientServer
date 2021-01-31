const UrlBuilder = (url, data) => {
  let backUrl = "";
  if (data) {
    backUrl = Object.keys(data)
      .map((key) => {
        return [key, data[key]].map(encodeURIComponent).join("=");
      })
      .join("&");
  }
  if (backUrl) {
    return `${url}&${backUrl}`;
  } else {
    return url;
  }
};
export default UrlBuilder;
