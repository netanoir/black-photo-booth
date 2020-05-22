window.addEventListener('DOMContentLoaded', async () => {

    // are.na api
    const URL = "https://api.are.na/v2/channels/black-photo-booth-ljgcx4v33om";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    // console.log(result);

    // loop thru bpb are.na channel json image urls
    for (let i = 0; i < result.length; i += 1) {
        // store bpb are.na channel json image urls in variable
        var imgURL = result.contents[i].image.large.url;
        console.log(imgURL);

        let photo = new Image();
        photo.src = imgURL;
        photo.setAttribute('class', 'photo');

        // add photo to archive booth
        document.getElementById("booth").appendChild(photo);
    }
});