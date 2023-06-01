import { useState } from 'react';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export interface Image {
    src: string;
    thumb: string;
}

function Gallery({images, title}: {images: Image[], title: string}) {
    const [isMore, setIsMore] = useState(false);

    return <>
            <div className='mx-auto container my-[var(--space-l-2xl)]' id="main-gallery">
            <h3 className="h3 my-[var(--space-l-2xl)] capitalize">{title}</h3>
                <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                mode="lg-fade"
                download={false}
                zoom={false}
            >
                {images.slice(
            0,
            isMore ? images.length : 6
        ).map((image) => (
                   <a href={image.src} key={image.src} className="inline-block m-1 p-1 w-[46%] lg:w-[23%]" style={{display: "inline-block", margin: "5px"}}>
                   <img alt="img2" width="100%" src={image.thumb} />
                   <p className="text-gray-500 mt-2">{title}</p>
               </a>
                ))}
            </LightGallery>
            </div>
                <button onClick={() => setIsMore(prev => !prev)} className="uppercase font-semibold text-red-600 mt-14 block mx-auto border-2 border-red-600 p-4">Zobacz {
                    isMore ? "mniej" : "więcej"
                }</button>

                </>;
}

export default Gallery;