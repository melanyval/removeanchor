const removeUrlAnchor = url => {
  return url.replace(/#.*/i, "");
}