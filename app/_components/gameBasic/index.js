"use client";

import { useState } from "react";
import GameEachView from "../gameEachView";
import GameResultView from "../gameResultView";
import data from '@/app/_components/dataGame';
import styles from "./index.module.css"

export default function GameBasic() {

    const info = data.quiz
    
    const [results, setResults] = useState([])

    const [num, setNum] = useState(0);

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (newValue) => {
        setSelectedOption(newValue)
    }

    const update = () => {
        const choice = info[num].choices
        const that = Object.keys(choice).filter(t => t == selectedOption)
        const prevalue = that[0]
        const value = choice[prevalue]
        const quests = Object.values(choice)
        const sameValue = quests.indexOf(value);
        setResults([
            ...results,
            {
                selectKey: sameValue,
                selectValue: value
            }
        ]);

        if(num < 10){
            setNum(c => c + 1)
        } else {
            setNum(10)
        }
    };
        
    const reset = () => {
        setResults([])
        setNum(0)
    }

    return (
        <>
            {num < 10 && <GameEachView {...info[num]} onUpdate={update} handleSelectChange={handleSelectChange} selectedOption={selectedOption}/>}
            {num === 10 && <GameResultView results={results} onReset={reset}/>}
        </>
    )
}