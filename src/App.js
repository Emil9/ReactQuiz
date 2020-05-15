import React, { useState } from 'react';
import ListaFiszek from './ListaFiszek';

function App() {
  const [fiszki, zbiorFiszek] = useState(FISZKA_PRZYKLAD)
  return (
    <ListaFiszek fiszki={fiszki} />
  );
}

const FISZKA_PRZYKLAD = [
  {
    id: 1,
    pytanie: 'Ile to 2 + 2?',
    odpowiedz: '4',
    mozliwosci: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    pytanie: 'Pytanie?',
    odpowiedz: 'Odpowiedź',
    mozliwosci: [
      'Odpowiedź',
      'Odpowiedź 1',
      'Odpowiedź 2',
      'Odpowiedź 3'
    ]
  }
]

export default App;
