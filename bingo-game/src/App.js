import { useState } from 'react';
import './App.css';

function App() {

  function generateRandomNumbers(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers;
  }
  const [columnB, setColumnB] = useState(generateRandomNumbers(1, 15, 5));
  const [columnI, setColumnI] = useState(generateRandomNumbers(16, 30, 5));
  const [columnN, setColumnN] = useState([
    ...generateRandomNumbers(31, 45, 2),
    "Free",
    ...generateRandomNumbers(46, 60, 2),
  ]);
  const [columnG, setColumnG] = useState(generateRandomNumbers(61, 75, 5));
  const [columnO, setColumnO] = useState(generateRandomNumbers(76, 90, 5));

  const bingoCard = [columnB, columnI, columnN, columnG, columnO];

  return (
    <div>
      {/* 開始ボタン表示と終了モーダル */}

      {/* ビンゴボールを取り出すボタンとその表示 */}
      <button>ガラガラを回す</button>
      <p>出たボールの数値：</p>
      {/* ビンゴカードの表示 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {bingoCard.map((column, i) => (
        <div key={i}>
          {column.map((cell, j) => (
            <div key={j}>{cell || ""}</div>
          ))}
        </div>
      ))}
    </div>
      {/* カードの中身 */}

      {/* 引いた番号の表示 */}

      {/* リーチとビンゴの数 */}

      {/* 今まで出たボールの一覧表示 */}
    </div>
  );
}

export default App;
