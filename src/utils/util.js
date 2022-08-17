import sound from "../assets/Notification.mp3"
export default async function play(){
    console.log(sound);
    let audio = new Audio(sound);
    console.log(audio);
    await audio.play();
};

