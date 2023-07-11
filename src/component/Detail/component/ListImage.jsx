import React, { useState } from 'react';
import banner1 from "../../../data/img/banner1.jpg";
import banner2 from "../../../data/img/banner2.jpg";
import banner3 from "../../../data/img/banner3.jpg";


const ListImage = () => {
    const [mainImage, setMainImage] = useState(banner1);
    const [isThumbnailClicked, setIsThumbnailClicked] = useState(false);
    const [imageFit, setImageFit] = useState('cover');

    const showImage = (imageUrl) => {
        setMainImage(imageUrl);
        setIsThumbnailClicked(!isThumbnailClicked);
        setImageFit(isThumbnailClicked ? 'cover' : 'contain');
    };

    const resetImage = () => {
        setIsThumbnailClicked(!isThumbnailClicked);
        setImageFit(isThumbnailClicked ? 'cover' : 'contain');
    };

    return (
        <div>
            <div>
                <div className="" onClick={resetImage} >
                    {mainImage && <img src={mainImage}
                        id="main-image"
                        className="h-[400px] overflow-hidden object-cover w-[600px]"
                        style={{ objectFit: imageFit }}
                        alt="shoe"
                    />
                    }
                </div>

                <div className='flex flex-row mt-[10px] justify-center'>
                    <div className="">
                        <img
                            className="h-[80px] w-[80px] overflow-hidden object-cover mr-[12px]"
                            src={banner1}
                            alt="shoe"
                            onClick={() => showImage(banner1)}
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-[80px] w-[80px] overflow-hidden object-cover mr-[12px]"
                            src={banner2}
                            alt="shoe"
                            onClick={() => showImage(banner2)}
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-[80px] w-[80px] overflow-hidden object-cover mr-[12px]"
                            src={banner3}
                            alt="shoe"
                            onClick={() => showImage(banner3)}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ListImage;