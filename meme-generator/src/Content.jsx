
import './App.css'
import React from "react"

function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        chosenImage: "http://i.imgflip.com/1bij.jpg"

    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            chosenImage: url
        }))  
    }

    function handleChange(event){
        const {name, value} = event.target 
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input 
                        id="top-text"
                        type="text"
                        placeholder="shut up"
                        className="form-input"
                        name="topText"
                        value={memeImage.topText}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                        id="bottom-text"
                        type="text"
                        placeholder="and take my money"
                        className="form-input"
                        name="bottomText"
                        value={memeImage.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    className="form-button"
                    onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
                <div className="meme-container"> 
                    <img src={memeImage.chosenImage} className="meme-image"/>
                    <h2 className="meme-text top">{memeImage.topText}</h2>
                    <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
                </div>
        </main>
    )
}

export default Meme
 