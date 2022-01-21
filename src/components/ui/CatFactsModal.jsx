import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Dialog } from '@mui/material'
import { startCreatingCatsTodos } from '../../redux/actions/todoActions'
import { Loading } from '../LoadingView'
import { toastStyle } from '../../helpers/toastStyle'

export const CatFactsModal = React.memo(({ open, setOpen }) => {

    const dispatch = useDispatch()
    const [numberOfFacts, setNumberOfFacts] = useState("")
    const [loadingCatsFacts, setLoadingCatsFacts] = useState(false)

    const getRandomFacts = async (e) => {
        e.preventDefault()
        const number = Number(numberOfFacts)
        if (!(/^[1-9]\d*$/.test(number))) {
            toast.error("Please provide a integer and positive number",toastStyle)
            return;
        }
        if (number > 100) {
            toast.error("The maximum number of phrases is 100",toastStyle)
            return;
        }
        setLoadingCatsFacts(true)
        const res = await fetch(`https://catfact.ninja/facts?max_length=100&limit=${number}`)
        const body = await res.json()
        await dispatch(startCreatingCatsTodos(body.data))
        // setOpen(false)
        setLoadingCatsFacts(false)
        setNumberOfFacts("")
    }

    return (
        <Dialog
            open={open}
        >
            <div className="modal__container">
                <h2 className="modal__title">Random facts about cats</h2>
                <main className="modal__main-content mb-4">
                    <p>No task in mind? try adding some number and we will get you some random phrases about cats as your tasks.</p>
                    <p>We can give you up to 100 phrases each time.</p>
                </main>
                {
                    loadingCatsFacts ?

                        <Loading fullScreen={false} color='#fb923c' /> :

                        <form 
                        onSubmit={getRandomFacts}
                        className="modal__form">
                            <input value={numberOfFacts} onChange={(e) => setNumberOfFacts(e.target.value)} type="number" placeholder="Number of phrases..." />
                            <section className="modal__button-container">
                                <button
                                    type="submit"
                                    // onClick={getRandomFacts}
                                >Submit</button>
                                <button
                                    type="button"
                                    onClick={() => { setOpen(false) }}
                                >Close</button>
                            </section>
                        </form>
                }
            </div>
        </Dialog>
    )
})
