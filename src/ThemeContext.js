import React from "react";
import { useEffect, useState, createContext } from "react";
import { result } from "./components/data.js";

const Context = createContext();

function ContextProvider({ children }) {
  const [translations, setTranslations] = useState(result);
  const [points, setPoints] = useState(0);
  console.log("translations", translations);
  // const [words, setWords] = useState([]);
  // const [translations, setTranslations] = useState([
  //   {
  //     english: "hello",
  //     korean: "안녕하세요",
  //     value: 10,
  //     checked: false,
  //     id: Math.random()
  //   }
  // ]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "7759e0a0c8mshc264a53188fff38p1949a1jsnc9ac66875e22",
  //       "X-RapidAPI-Host": "1000-most-common-words.p.rapidapi.com"
  //     }
  //   };

  //   async function fetchWords() {
  //     let url =
  //       "https://1000-most-common-words.p.rapidapi.com/words/english?words_limit=20";
  //     await fetch(url, options)
  //       .then((resp) => resp.json())
  //       .then((data) => setWords(data));
  //   }
  //   fetchWords();
  // }, []);

  // useEffect(() => {
  //   async function fetchTranslations() {
  //     console.log(words);
  //     const encodedParams = new URLSearchParams();
  //     encodedParams.append("source_language", "en");
  //     encodedParams.append("target_language", "ko");
  //     encodedParams.append("text", words);

  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded",
  //         "X-RapidAPI-Key":
  //           "38df9fb175msha38621d86885d91p17b922jsnca1d8f50784d",
  //         "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
  //       },
  //       body: encodedParams
  //     };

  //     fetch("https://text-translator2.p.rapidapi.com/translate", options)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         let result = [];
  //         let copy = response.data.translatedText.split(",");
  //         for (let i = 0; i < words.length; i++) {
  //           let newWords = {
  //             english: words[i],
  //             korean: copy[i],
  //             value: 10,
  //             checked: false,
  //             id: Math.random()
  //           };
  //           result.push(newWords);
  //         }
  //         setTranslations(result);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  //   fetchTranslations();
  // }, [words]);

  // useEffect(() => {
  //   console.log(translations);
  // }, [translations]);

  let wrongAnswerArray = "run jump play swim glow peak wonder curate mitigate slow fast luggage cup captain ink phone".split(
    " "
  );

  return (
    <Context.Provider
      value={{ translations, wrongAnswerArray, points, setPoints }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
