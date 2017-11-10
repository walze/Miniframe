import { Page } from "../router";

document.querySelectorAll('[href]').forEach(el => {
    el.addEventListener('click', ev => {
        window.location = ev.target.getAttribute('href');
    });
});

export const URL = document.location.href.split('/').slice(3);

let newPage;

if (Page[URL[0]])
    newPage = Page[URL[0]];
else
    newPage = Page.home;

document.querySelector('#view').innerHTML = newPage;