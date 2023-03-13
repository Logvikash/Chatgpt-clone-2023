import React from "react";
import { Configuration, OpenAIApi } from "openai";
import SelectOptions from "./Components/SelectOptions";
import { languagemodels } from "./Modelsfile/Models";
import GetResult from "./Components/GetResult";
import { useState } from "react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

function App() {
  const [Option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  //Create Configuration Object
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  //create OpenAiApi object
  const openai = new OpenAIApi(configuration);
  const selectOption = (option) => {
    setOption(option);
  };

  // create asyn function to get data 
  const action = async () => {

    // Created a new object call prompt

    let object = { ...Option, prompt: input};

    //Taking object as a argument and pass in API parameters for request
    const response = await openai.createCompletion(object);
    let formattedResult = response.data.choices[0].text;
    // condition if result === code 
    if (Option.engine === "davinci-codex") {
      formattedResult = prettier.format(formattedResult, {
        // convert into prettier format
        parser: "babel",
        plugins: [parserBabel],
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: "es5",
        bracketSpacing: true,
      });
    }
    setResult(formattedResult);
  };
  return (
    <>
      <div>
        {Object.values(Option).length === 0 ? (
          <SelectOptions modelItem={languagemodels} selectOption={selectOption} />  //Sending data to selectOptions component
        ) : (
          <GetResult action={action} setInput={setInput} result={result} />   //Sending data to GetResult component
        )}
      </div>
    </>
  );
}
export default App;
