import GifITem from './GifITem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GiftGrid = ({ Category }) => {

    const {images, isLoading} = useFetchGifs(Category);

    return (
        <>
            <h3> { Category }</h3>

            <div className="card-grid">
                {   
                    images.map( ( img ) => 
                        <GifITem  key={img.id}
                        {...img}/>
                    )
                }
            </div>
        </>
    )
}

export default GiftGrid;

// useEffect -> Es un Hook que sirve como disparador de efectos secundarios
// Por ejem: Algun proceso cuando "Algo suceda"