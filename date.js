console.log(module);

function getDate() {
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    return day;
}


