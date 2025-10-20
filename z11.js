function domainName(url) {
  if (url.startsWith("http://"))
  {
    url = url.slice(7);
  } else if (url.startsWith("https://"))
  {
    url = url.slice(8);
  }
  if (url.startsWith("www."))
  {
    url = url.slice(4);
  }
  let parts = url.split(".");
  return parts[0];
}
