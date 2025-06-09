const form_firebase = document.querySelector("#FormFirebase"),
      list_videos = [];
// firebase.initializeApp(config);
// 
form_firebase.addEventListener('submit', async(e) => {
    e.preventDefault();     
    let link = form_firebase.elements.LinkVideo.value;
    let type = form_firebase.elements.TypeVideo.value;
    list_videos.push(
        {
            sources: [
                {
                  src: link,
                  type: type
                }
            ],
        });
});