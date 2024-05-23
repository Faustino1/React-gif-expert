
export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PcEnm1H3NSo4QLHte7Os8OrBOcbgTffx&q=${categoria}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json()
    const gifs = data.map(img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
  }
