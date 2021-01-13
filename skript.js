const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here 
        console.log('error in the select media strem');
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true; 
    // Start picture in Picture 
    await videoElement.requestPictureInPicture() ;
    //Reset Button 
    button.disabled = false; 
});

selectMediaStream();