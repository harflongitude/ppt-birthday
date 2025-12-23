"use client";
import TypingText from "@/components/character-text";
import { useState } from "react";

export default function GreetingTemplate({ text, onComplete } : { text: string, onComplete: () => void }) {
    const [isComplete, setIsComplete] = useState(false);
    return (
        <div onClick={() => { 
            if (isComplete) {
                onComplete()
                setIsComplete(false)
            } else {
                setIsComplete(true)
            } 
            }} className="absolute inset-0 flex items-center justify-center">
            {isComplete ? 
                <h1 className="text-4xl font-bold text-white text-shadow-sm text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">{text}</h1>
            :
            <TypingText 
                text={[text, text]}
                typingSpeed={20}
                loop={false}
                pauseDuration={120}
                deletingSpeed={0}
                showCursor={true}
                className="text-4xl font-bold text-white text-shadow-sm text-center"
                // cursorClassName="h-12"
                // textColors={['#fff', '#8b5cf6', '#06b6d4']}
                onSentenceComplete={(s) =>{ 
                    console.log("Completed sentence:", s);
                    setIsComplete(true)
                }}
                variableSpeed={{ min: 20, max: 90 }}
            />
            }
            {isComplete ? 
                <span className=" animate-bounce text-[#C9A7B8] text-shadow-2xs absolute bottom-0">Okey arrofi, lanjut!</span>
            : <span className=" animate-bounce text-[#C9A7B8] text-shadow-2xs absolute bottom-0">Aidah lamanya, click aja</span>}
        </div>
    )
}