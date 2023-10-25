import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

const useFetchGifs = (Category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {

        const newImages =  await getGifs( Category );
        setimages (newImages);
    };

    useEffect( () => {
        getImages();
        setisLoading(false);
    }, [ ] )

  return {
    images: images,
    isLoading
  }

}

export default useFetchGifs
