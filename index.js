

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
    let imgA = [
        "https://image.freepik.com/free-photo/scottish-fold-cat-blue-surface_23-2148181678.jpg",
        "https://image.freepik.com/free-photo/parrot-profile_1136-16.jpg",
        "https://image.freepik.com/free-photo/fennec-fox-desert-fox_1339-7445.jpg",
        "https://image.freepik.com/free-photo/head-sika-deer_1398-3647.jpg",
        "https://image.freepik.com/free-photo/sea-otter-enhydra-lutris_69593-6665.jpg"
        ];

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
      where[whereIndex])
      + 
      `<img src="${imgA[animalIndex]}" width="400px" />`  ;  
  };
};
