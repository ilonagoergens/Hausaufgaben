import { useState } from 'react'
import './App.css'

function App() {
  const [newRecipe, setnewRecipe] = useState({
    name: "",
    beschreibung: "",
    zutaten: "",
    schwierig: ""
  })
  const [recipeList, setRecipeList] = useState([])

  function safeRecipe() {
    const recipeWithId = {...newRecipe, id: Date.now() }
    setRecipeList([...recipeList, newRecipe])
    setnewRecipe({
      name: "",
      beschreibung: "",
      zutaten: "",
      schwierig: ""
    })
  }

  function deleteRecipe(id) {
    const update = recipeList.filter(recipe => recipe,id !== id)
    setRecipeList(update)
  }

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
    <b>Name:</b><input onChange={(e) =>
        setnewRecipe({...newRecipe, name: e.target.value})} 
      value={newRecipe.name}/><br/>
    <b>Beschreibung:</b><input style={{display: 'grid'}} onChange={(e) =>
        setnewRecipe({...newRecipe, beschreibung: e.target.value})} 
      value={newRecipe.beschreibung}/><br/>
    <b>Zutaten:</b><input style={{display: 'grid'}} onChange={(e) =>
        setnewRecipe({...newRecipe, zutaten: e.target.value})} 
      value={newRecipe.zutaten}/><br/>
    <b>Schwierigkeit:</b><input style={{display: 'grid'}} onChange={(e) =>
        setnewRecipe({...newRecipe, schwierig: e.target.value})} 
      value={newRecipe.schwierig}/><br/>
      <button onClick={safeRecipe}>Speichern</button>
      <ul>
            {recipeList.map((recipe, index) => {
                return <li key={index}>
                  <b>Name:</b> {recipe.name}, <b>Beschreibung:</b>{recipe.beschreibung}, <b>Zutaten:</b>{recipe.zutaten}, <b>Schwierigkeit:</b>{recipe.schwierig}</li>
            })}
      </ul>
    </div>
    </>
  )
}

export default App
