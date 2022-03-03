function doPost(event) {
  let body = JSON.parse(event.postData.contents);
  let response = {
    status: 200,
    request: JSON.stringify(body),
  };
  return response;
}
