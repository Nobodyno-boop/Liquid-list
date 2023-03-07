import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Card} from "@/components/molecules/Card";
import {useStore} from "@nanostores/react";
import {createCard, getCards} from "@/store/card";
import {useEffect, useState} from "react";

export default function Home() {
    const [cards, setCards] = useState([])
    const c = useStore(getCards)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCards(c)
    }, [])
    return (
        <>
            <div>
                <button onClick={() => {
                    const cards = createCard()
                    setCards(cards)
                }
                }>
                    add
                </button>

            </div>

            {cards.map((value, index) => (
                <Card key={index}  state={value} />
            ))}
        </>
    )
}
