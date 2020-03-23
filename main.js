window.addEventListener('DOMContentLoaded', async () => {
    // console.log('page is fully loaded');

    // are.na api
    const URL = "https://api.are.na/v2/channels/black-photo-booth-ljgcx4v33om";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    // console.log(result);

    // randomize
    // var numOfPhotos = 100;
    // var randomPhoto = Math.floor( Math.random() * numOfPhotos );

    // loop thru bpb are.na channel json image urls

    for (let i = 0; i < result.length; i += 1) {

        // identify img ids
        var imgID = document.getElementById( "photo-" + i );
        console.log(imgID);
        
        // store bpb are.na channel json image urls in variable
        var imgURL = result.contents[i].image.large.url;
        console.log(imgURL);

        // fill img src w/ bpb are.na channel json image urls
        document.getElementById( "photo-" + i ).src = imgURL; 

    }

});