window.addEventListener('DOMContentLoaded', async () => {

    // are.na api
    const URL = "https://api.are.na/v2/channels/black-photo-booth-ljgcx4v33om?page=1&per=100";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    // console.log(result);

    // randomize
    var numOfPhotos = result.length;
    var randomPhoto = Math.floor( Math.random() * numOfPhotos );


    // loop thru bpb are.na channel json image urls
    for (let i = 0; i < numOfPhotos; i += 1) {

        // if (result.contents[i] !== undefined) {

            // store bpb are.na channel json image urls in variable
            var imgURL = result.contents[i].image.display.url;
            console.log(imgURL);

            let photo = new Image();
            photo.src = imgURL;
            photo.setAttribute('class', 'photo');

            // add photo to archive booth
            document.getElementById("booth").appendChild(photo);
        //   }

    }
});