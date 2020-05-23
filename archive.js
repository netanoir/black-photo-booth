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
        console.log(apiResult);
        const photo = new Image();
        photo.src = apiResult.url;
        photo.setAttribute('class', 'photo');
        photoLibrary.push(photo);
    }
    
    const copyphotoLibrary = [...photoLibrary];
    const shuffledphotoLibrary = copyphotoLibrary.sort( (a,b) => 0.5 - Math.random() );
    console.log( "shuffled: " + shuffledphotoLibrary);

    for (let i = 0; i < numOfPhotos; i += 1) {
        document.getElementById("booth").appendChild(shuffledphotoLibrary[i]);
    }

    // option 2: chronological
    // // loop thru bpb are.na channel json image urls
    // for (let i = 0; i < numOfPhotos; i += 1) {
    //     // store bpb are.na channel json image urls in variable
    //     let imgURL = result.contents[i].image.display.url;
    //     let photo = new Image();
    //     photo.src = imgURL;
    //     photo.setAttribute('class', 'photo');

    //     // add photo to archive booth
    //     // document.getElementById("booth").appendChild(photo);
    // }
});
