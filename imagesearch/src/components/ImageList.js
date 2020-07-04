import React from 'react'

const ImageList =(props)=> {
    console.log("imagelist",props)
    const images = props.images.map((images)=>{
        return <img key={images.id} src={images.urls.regular} alt={images.alt_description} />
    })

    return <div>{images}</div>
}

export default ImageList;