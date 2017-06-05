
function myFunction() {
    "use strict";
    if (document.getElementById('alert').style.display === 'none') {
        document.getElementById('alert').style.display = 'block';
        document.getElementById('display').innerHTML = 'No Thanks!';
    } else {
        document.getElementById('alert').style.display = 'none';
        document.getElementById('display').innerHTML = 'Set Price Alert!';
    }
}
window.onload = function () {
 document.getElementById('display').onclick = myFunction;
    } 


