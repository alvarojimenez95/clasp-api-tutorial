// POST with params
function doPost(event) {
  let params = JSON.stringify(event.parameter);
  let request = JSON.parse(params);
  return ContentService.createTextOutput(request).setMimeType(
    ContentService.MimeType.JSON
  );
}

function sayHello(name, age) {
  let value = `Hello ${name}. you are ${age} years old`;
  return value;
}
