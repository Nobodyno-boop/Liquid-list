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
        <div className="bg-primary-content h-screen">
            <div className="navbar bg-base-100">
                <a className="btn btn-ghost normal-case text-xl">Liquid-List</a>
                <button
                    className="btn"
                    onClick={() => {
                        const cards = createCard()
                        setCards(cards)
                    }
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"/></svg>
                    <span>ajouter une card</span>
                </button>
            </div>
            <div className="w-full flex justify-center">


            </div>

            <div className="m-2 flex gap-x-2 gap-y-2">
                {cards.map((value, index) => (
                    <Card key={index}  state={value} />
                ))}
            </div>
        </div>
    )
}
