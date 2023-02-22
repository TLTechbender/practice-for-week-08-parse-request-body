
function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  const paired = input.map(el => {
    let pair = el.split('=');
    return pair;
  });

  return paired;
}

function thirdStep(input) {
  // Your code here
  const replaced = input.map(el => {
    const newEl = el.map(str => {
      return str.replace(/\+/g, " ");
    });

    return newEl;
  });

  return replaced;
}

function fourthStep(input) {
  // Your code here
  const decoded = input.map(el => {
    const newEl = el.map(str => {
      return decodeURIComponent(str);
    });

    return newEl;
  });

  return decoded;
}

function fifthStep(input) {
  // Your code here
  const body = input.reduce((sorted, pair) => {
    return {
      ...sorted,
      [pair[0]]: pair[1],
    };
  }, {});

  return body;
}

function parseBody(str) {
  // Your code here
  let input = firstStep(str);
  input = secondStep(input);
  input = thirdStep(input);
  input = fourthStep(input);
  input = fifthStep(input);

  return input;
}
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};