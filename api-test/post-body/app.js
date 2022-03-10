function doPost(event) {
  let body = JSON.parse(event.postData.contents);
  let data = sayHello(body.name, body.age);
  let goodBye = sayGoodBye();
  let response = {
    status: 200,
    request: body,
    ms2: data,
    msg1: goodBye,
  };
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON
  );
}

const sayHello = (name, age) => {
  return `Hello ${name}, you are ${age} years old.`;
};

const sayGoodBye = () => {
  return "Goodbye!";
};
