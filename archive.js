window.addEventListener('DOMContentLoaded', async () => {

    // are.na api
    const URL = "https://api.are.na/v2/channels/black-photo-booth-ljgcx4v33om?page=1&per=100";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    let numOfPhotos = result.length;
    const photoLibrary = [];

    // option 1: random
    for (let i = 0; i < numOfPhotos; i += 1) {
        let apiResult = result.contents[i].image.display;
        const photo = new Image();
        photo.src = apiResult.url;
        photo.setAttribute('class', 'photo');
        photoLibrary.push(photo);
    }
    
    const copyPhotoLibrary = [...photoLibrary];
    const shuffledPhotoLibrary = copyPhotoLibrary.sort( (a,b) => 0.5 - Math.random() );

    for (let i = 0; i < numOfPhotos; i += 1) {
        document.getElementById("booth").appendChild(shuffledPhotoLibrary[i]);
    }
});
