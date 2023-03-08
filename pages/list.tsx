import {Card} from "@/components/molecules/Card";
import {useStore} from "@nanostores/react";
import {createCard, getCards, UpdateLocalStorage} from "@/store/card";
import {useEffect, useState} from "react";

export default function Home() {
    const [cards, setCards] = useState([])
    const c = useStore(getCards)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCards(c)
    }, [c])

    return (
        <div className="bg-primary-content h-screen h-full">
            <div className="navbar bg-base-100 inline-flex gap-x-5">
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
                <a href="#reset" className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"/></svg>
                    <span>reset</span>
                </a>
            </div>
            <div className="modal" id="reset">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Êtes-vous sure de vouloir reset ?</h3>
                    <p className="py-4">Vos cards seront <span className="font-extrabold text-error">supprimés</span> sans possibilités de retour en arrière</p>
                    <div className="modal-action">
                        <a href="#" className="btn btn-error btn-outline"
                           onClick={() => {
                            UpdateLocalStorage([])
                            }}>
                            Oui
                        </a>
                        <a href="#" className="btn btn-outline">Non</a>
                    </div>
                </div>
            </div>
            <div className="m-4 flex gap-x-2 gap-y-2 flex-wrap justify-evenly">
                {cards.map((value) => (
                    <Card key={value._id}  state={value} />
                ))}
            </div>
        </div>
    )
}
