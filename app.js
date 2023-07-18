const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Radhey Radhe, Good Morning");
    }

    else if(hr == 12) {
        speak("Hare Krishna, Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Jay Shri Ram, Good Afternoon");
    }

    else {
        speak("Radhey Radhey, Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Abhi");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "I don't understand hey, say with a love Radhey Radhey";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "Radhey Radhey, I am fine and tell me how can i help you";
        speech.text = finalText;
    }


    else if(message.includes('name')) {
        const finalText = "My name is Abhi";
        speech.text = finalText;
    }

    else if(message.includes('your favorite player')){
        const finalText = "Rohit Sharma";
        speech.text = finalText;
    }

    else if(message.includes('who is greate player all the time')){
        const finalText = "Rohit Sharma";
        speech.text = finalText;
    }

    else if(message.includes('your favorite teacher')){
        const finalText = "Shri Krishna";
        speech.text = finalText;
    }

    else if(message.includes('your favorite madam')){
        const finalText = "Khandagale mam, Nandedkar mam and Priti mam. They are very inspirational and supporting mam ever.";
        speech.text = finalText;
    }

    else if(message.includes('your best friend')){
        const finalText = "Shri Krishna";
        speech.text = finalText;
    }

    

    else if(message.includes('who is your inspiration')){
        const finalText = "Shri Krishna and Mahakal";
        speech.text = finalText;
    }

    else if(message.includes('tell me your country')){
        const finalText = "India, I from India and I am proud to be an Indian";
        speech.text = finalText;
    }

    else if(message.includes('who is your love')){
        const finalText = "I love shri RadheyKrishna";
        speech.text = finalText;
        window.open(`C:\Users\hp\Pictures\My project file\HTML Project\Virtual assistance\Shri Krishna.jpg(" ", "+")}`, "_blank");
    }

    else if(message.includes('Good morning && Good Afternoon')){
        const finalText = "Jay Shri RadheyKrishna ";
        speech.text = finalText;
    }

    else if(message.includes('Good Morning') || message.includes('Good Night')) {
        const finalText = "I don't understand Good morning, good night, prem se kaho Radhey Radhe";
        speech.text = finalText;
    }

    else if(message.includes('who is your two assitance')){
        const finalText = "Prasad and Hariom both are two assitance";
        speech.text = finalText;
    }



    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }


    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}