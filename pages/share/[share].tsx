import { useRouter } from 'next/router'
import {createCard, UpdateLocalStorage} from "@/store/card";
import {Card} from "@/components/molecules/Card";
import {useEffect, useState} from "react";
import nextBase64 from "next-base64";


export default function Share() {
    const [cards, setCards] = useState([])
    const router = useRouter()
    const { share } = router.query

    useEffect(() =>  {
        if (typeof share === "string") {
            const data = JSON.parse(nextBase64.decode(share))
            setCards(data.cards)
        }
    }, [router.query.share])


    return (
        <div className="bg-primary-content h-screen h-full">
            <div className="navbar bg-base-100 inline-flex gap-x-5">
                <a className="btn btn-ghost normal-case text-xl">Liquid-List</a>
                <button className="btn">
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
