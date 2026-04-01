/////////   Live Clock (with different Time zones)        



// intializing varaiables and required data

let time = document.getElementById('time');
let date = document.getElementById('date');
let timezones = document.getElementById('timezones');
let chZone = document.getElementById('chZone');
let Zone = 'Asia/Calcutta';

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let zoneApi = "https://timeapi.io/api/timezone/availabletimezones";
let timeApi = "https://timeapi.io/api/time/current/zone?timeZone=";




// Fetching Time zones to put in options 

async function fetchTimezones() {
    let promise = await fetch(zoneApi);
    let zonedata = await promise.json();
    
    zonedata.forEach(zone => {
        let option = document.createElement("option");
        option.value = zone;
        option.innerHTML = zone;
        timezones.appendChild(option);
    });
}
fetchTimezones();



// Settin Default Zone Time

(function defaultime () {
    setInterval( async () => {
        let promise = await fetch(`${timeApi}${Zone}`)
        let data = await promise.json();
        // console.log(data);
        datee = data.date;
        dayy = data.dayOfWeek;
        timee = data.time;
        secc = data.seconds;
        
        date.innerText = `${datee}, ${dayy}.`;
        time.innerText = `${timee}:${secc}`;

    }, 1000);
})();




// defining function to change timezone

chZone.addEventListener("click", async () => {
    Zone = timezones.value;

    setInterval( async () => {
        let promise = await fetch(`${timeApi}${Zone}`)
        let data = await promise.json();
        // console.log(data);
        datee = data.date;
        dayy = data.dayOfWeek;
        timee = data.time;
        secc = data.seconds;
        
        date.innerText = `${datee}, ${dayy}.`;
        time.innerText = `${timee}:${secc}`;

    }, 1000);
});


// That's IT 
// Code / Logic Done.




























// async function fetchTimezones() {
//     let response = await fetch(zoneApi);
//     let data = await response.json();
//     timezones.innerHTML = "";
//     data.forEach(zone => {
//         let option = document.createElement('option');
//         option.value = zone;
//         option.innerText = zone;
//         timezones.appendChild(option);
//     });
// }
// fetchTimezones();