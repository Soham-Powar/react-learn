import './App.css'

// function App() {
//   const animals = ["lion", "tiger", "cheetah"];
//   return (
//     <>
//     <h1>Animals: </h1>
//     <ul>
//       {animals.map((animal) => {
//         return <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//     </>
//   )
// }

// ALTERNATE

// function App() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];
//   const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animalsList}
//       </ul>
//     </div>
//   );
// }

//Working of props
// function ListItem(props) {
//   return (
//     <li>{props.animalName}</li>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.animalList.map((animal) => {
//        return <ListItem key={animal} animalName={animal}/>
//       })}
//     </ul>
//   );
// }


// function App() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animalss: </h1>
//       <List animalList={animals}/>
//     </div>
//   );
// }




// Conditional Rendering of UI

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
  return (
    <div>
      <h1>Animals: starting with L</h1>
      <List animals={animals} />
    </div>
  );
}

export default App;