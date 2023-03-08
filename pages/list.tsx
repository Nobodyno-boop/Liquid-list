import {Card} from "@/components/molecules/Card";
import {useStore} from "@nanostores/react";
import {createCard, getCards, UpdateLocalStorage} from "@/store/card";
import {useEffect, useState} from "react";
import {tagsAtom} from "@/store/tag";
import nextBase64 from "next-base64";
import {url} from "@/utils/link";

export default function Home() {
    const [cards, setCards] = useState([])
    const c = useStore(getCards)
    const [copy, setCopy] = useState(false)
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCards(c)
    }, [c])

    const share = () => {
        const cards = getCards.get()
        const tags = tagsAtom.get()
        const str = JSON.stringify({
            cards,
            tags
        })

        const base64 = nextBase64.encode(str)
        const path = url('/share/')
        navigator.clipboard.writeText(`${window.location.origin+path+base64}`).then(e => {
            setCopy(true)

            setTimeout(() => {
                setCopy(false)
            }, 3000)
        })
    }

    return (
        <div className="bg-primary-content h-screen h-full relative">
            <div className='w-full flex justify-center'>
                <div className={`alert max-w-lg shadow-lg absolute top-20 z-10 transition-all duration-200 ${copy ? 'opacity-100' : 'opacity-0'}`}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Le lien share à été copier dans votre press-papier</span>
                    </div>
                </div>
            </div>
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
                <button className="btn" onClick={share}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 14h2v-2q0-.425.288-.713T11 11h2v2l3-3l-3-3v2h-2q-1.25 0-2.125.875T8 12v2Zm-6 7q-.425 0-.713-.288T1 20q0-.425.288-.713T2 19h20q.425 0 .713.288T23 20q0 .425-.288.713T22 21H2Zm2-3q-.825 0-1.413-.588T2 16V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.588 1.413T20 18H4Z"/></svg>
                    <span>share</span>
                </button>
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
