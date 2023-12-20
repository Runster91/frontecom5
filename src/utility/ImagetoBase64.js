async function Imagetobase64(file){
    const reader = new FileReader()
    reader.readAsDataURL(file)

    const data = new Promise ((resolve, reject)=>{
        reader.onload = () => resolve (reader.result)
        reader.onerror = err => reject(err)
    })
}

export {Imagetobase64}