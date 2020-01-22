

window.onload = () => {
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");

  let generateExcuse = () => {
    let pretext = ["A", "The", "On"];
    let animal = ["Cat", "Bird", "Fox", "Deer", "Otter"];
    let action = ["eat my", "stole my", "cached my", "enjoyed my"];
    let what = ["shoe", "toe", "food", "homework"];
    let where = ["at home", "in forest", "on the street"];

    let pretextIndex = Math.floor(Math.random() * pretext.length);
    let animalIndex = Math.floor(Math.random() * animal.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whereIndex = Math.floor(Math.random() * where.length);


    return (
      pretext[pretextIndex] +
      " " +
      animal[animalIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      where[whereIndex]);
    
  };
};
