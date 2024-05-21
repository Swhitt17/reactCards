import {v4 as uuid} from "uuid";
function choice(values) {
    const randIdx = Math.floor(Math.random() * values.length);
    return values[randIdx];
  }

  function getImage(data) {
    return {
      image: data.cards[0].image,
      id: uuid()
    };
  }
  
  export { choice, getImage };