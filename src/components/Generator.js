import React, { useState } from "react";
import style from "./Generator.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Generator() {
  const [password, setPassword] = useState();
  const [numbers, setNumbers] = useState();
  const [lowLetters, setLowLetters] = useState();
  const [upLetters, setUpLetters] = useState();
  const [symbols, setSymbols] = useState();
  const [passLenght, setPassLenght] = useState(6);

  const gen = () => {
    let stek = [];
    let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let lowLettersArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let uppLettersArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let specSymbolsArr = ["%", "*", ")", "?", "@", "#", "$", "~"];
    let preresult = [];

    if (numbers) {
      preresult.push(...numbersArr);
    }
    if (lowLetters) {
      preresult.push(...lowLettersArr);
    }
    if (upLetters) {
      preresult.push(...uppLettersArr);
    }
    if (symbols) {
      preresult.push(...specSymbolsArr);
    }

    console.log(preresult);

    for (let i = 1; i <= passLenght; i++) {
      let a = Math.floor(Math.random() * Math.floor(preresult.length));
      stek.push(preresult[a]);
    }
    let result = stek.toString("").split(",").join("");

    setPassword(result);
  };

  return (
    <div className={style.generator}>
      <div className={style.container}>
        <div className={style.inner}>
          <fieldset className={style.field}>
            <legend>Опции генератора:</legend>
            <label>
              <input
                type="checkbox"
                value={numbers}
                onChange={() => {
                  setNumbers(!numbers);
                }}
              />
              Цифры 0-9
            </label>
            <label>
              <input
                type="checkbox"
                value={lowLetters}
                onChange={() => {
                  setLowLetters(!lowLetters);
                }}
              />
              Маленькие буквы a-z
            </label>
            <label>
              <input
                type="checkbox"
                value={upLetters}
                onChange={() => {
                  setUpLetters(!upLetters);
                }}
              />
              Большие буквы A-Z
            </label>
            <label>
              <input
                type="checkbox"
                value={symbols}
                onChange={() => {
                  setSymbols(!symbols);
                }}
              />
              Спец. символы %, *, {")"},?, @, #, $, ~
            </label>
            <label>
              Длина пароля:
              <select
                onChange={(e) => {
                  setPassLenght(Number(e.target.value));
                }}
              >
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="40">40</option>
              </select>
            </label>
          </fieldset>
          <div className={style.result__field}>
            <button onClick={gen}>Сгенерировать пароль</button>
            <div className={style.password__inner}>
              <input type="text" value={password} />
              <CopyToClipboard text={password}>
                <button>Copy</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
