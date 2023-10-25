const apiKey = 'MhNls4RQKWbuWN2UnnVLkSZDavEdaYmp';
const urlApi = `https://api.giphy.com/v1/gifs/`;

export const getGifs = async ( category ) => {
    
    const url = `${urlApi}search?api_key=${apiKey}&q=${category}&limit=6`;
    const response = await fetch(url);
    const { data } = await response.json();
    
    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
};