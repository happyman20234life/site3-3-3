
function openEmbed() {

    var newWindow = window.open('about:blank');


    var iframe = document.createElement('iframe');


    iframe.src = 'https://happyman20234life.github.io/regular-amout-of-games/TS3/';


    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';


    newWindow.document.body.appendChild(iframe);


    newWindow.document.title = 'ReCrota | Time Shooter 3';
}


document.getElementById('ts3').addEventListener('click', openEmbed);