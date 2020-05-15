import React, { useState, useEffect, useRef } from 'react';
import ListaFiszek from './ListaFiszek';
import './App.css';
import axios from 'axios';


function App() {
  const [fiszki, setFiszki] = useState([])
  const [kategorie, setKategorie] = useState([])

  const kategoriaEl = useRef()
  const iloscEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setKategorie(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {
    
  }, [])

  function dekodujTekst(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function submit(e) {
    e.preventDefault()
    axios.get('https://opentdb.com/api.php', {
      params: {
        amount: iloscEl.current.value,
        category: kategoriaEl.current.value
      }
    })
      .then(res => {
        setFiszki(res.data.results.map((pytanieItem, index) => {
          const answer = dekodujTekst(pytanieItem.correct_answer)
          const options = [
            ...pytanieItem.incorrect_answers.map(a => dekodujTekst(a)),
            answer]
          return {
            id: `${index}-${Date.now()}`,
            question: dekodujTekst(pytanieItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }

  return (
    <>
    <form className="header" onSubmit={submit}>
      <div className="form-grupa">
        <label htmlFor="category">Kategoria</label>
        <select id="category" ref={kategoriaEl} >
          {kategorie.map(kategoria => {
            return <option value={kategoria.id} key={kategoria.id}>{kategoria.name}</option>
          })}
          
        </select>
      </div>
        <div className="form-grupa">
          <label htmlFor="ilosc">Ilość pytań</label>
          <input type="numer" id="ilosc" min="1" step="1" defaultValue={10} ref= {iloscEl} />
        </div>
        <div className="form-grupa">
          <button className="btn">Generuj</button>
        </div>
    </form>
      <div className="kontener">
       <ListaFiszek fiszki={fiszki} />
      </div>
    </>
  );
}

export default App;
