// GET request with parameters
function doGet(event) {
  // even.params is an object containing the request params
  let params = JSON.stringify(event.parameter);
  let request = JSON.parse(event.parameter);
  let msg = sayHello(request.name, request.age);
  console.log(params.name);
  let response = {
    status: 200,
    request: request,
    msg: msg,
  };
  // need to convert response to JSON if passed as an object
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
  //console.log(params);
}

const sayHello = (name, age) => {
  let value = `Hello ${name}, you are ${age} years old`;
  return value;
};
