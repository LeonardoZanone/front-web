export function success(message) {
    document.getElementById('messagebox').style.display = 'block';
    document.getElementById('messagebox').style.backgroundColor = '#4caf50';
    document.getElementById('messagebox-label').innerText = message;
    setTimeout(() => {
        document.getElementById('messagebox').style.display = 'none';
    }, 2500);
}

export function warn(message) {
    document.getElementById('messagebox').style.display = 'block';
    document.getElementById('messagebox').style.backgroundColor = '#fad232';
    document.getElementById('messagebox-label').innerText = message;
    setTimeout(() => {
        document.getElementById('messagebox').style.display = 'none';
    }, 2500);
}

export function error(message) {
    document.getElementById('messagebox').style.display = 'block';
    document.getElementById('messagebox').style.backgroundColor = '#dd514c';
    document.getElementById('messagebox-label').innerText = message;
    setTimeout(() => {
        document.getElementById('messagebox').style.display = 'none';
    }, 2500);
}

// function fadeout(alpha) {
//     setTimeout(() => {
//         if (alpha === 0) {
//             document.getElementById('messagebox').style.display = 'none';
//         }
//         else {
//             document.getElementById('messagebox').style.opacity = alpha;
//             fadeout(alpha -= 0.1);
//         }
//     }, 200);
// }