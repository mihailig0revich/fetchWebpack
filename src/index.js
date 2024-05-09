import './style.scss'
import {createTag, removeAllChildren, updateCardsList} from "./tagCreate";
import {debounceFetch, fetchWebpack} from "./fetch";

export const base = []
export let response = []


function createCard (repo) {
        const card = createTag("div", "main-block__rep-card rep-card");
        card.id = repo.id;
        const cardNode = createTag("div", "rep-card__block");

        const textName = createTag("p", "rep-card__element rep-card__element-name", repo.name);
        cardNode.appendChild(textName);

        const textRepo = createTag("p", "rep-card__element rep-card__element-owner", repo.repoName);
        cardNode.appendChild(textRepo);

        const textStars = createTag("p", "rep-card__element rep-card__element-stars", repo.stars);
        cardNode.appendChild(textStars);

        card.appendChild(cardNode)

        const button = createTag(
            "button",
            "rep-card__remove-button",
            'X',
            {
                    name:'click',
                    func: function () {
                            document.getElementById(repo.id).remove()
                    }
            }
        );
        card.appendChild(button);

        return card;
}

function createSearchElem(repo) {
        const card = createTag("div", "search-result__elem");
        card.id = repo.id;
        card.addEventListener('click', () => {
                base.push(repo);
                response=[];
                removeAllChildren(document.querySelector(".search-result__wrapper"))
                updateCardsList(document.querySelector(".repos"), base, createCard);
        });
        const text = createTag('p', 'search-result__text', repo.repoName);
        card.appendChild(text)
        return card
}

updateCardsList(document.querySelector(".repos"), base, createCard);

function formHandler(id) {
        let controlValue = '';
        const form = document.getElementById(id);
        async function handler() {
                controlValue = form.value;
                if (controlValue !== '') {
                        response = []
                       await fetchWebpack(controlValue);
                       updateCardsList(
                           document.querySelector(".search-result__wrapper"),
                           response,
                           createSearchElem
                       )
                }
        }

        form.oninput = debounceFetch(handler, 1000);
}
formHandler('search-form')

document.querySelector('.submit-form__submit-button')
    .addEventListener('click', (e)=> {
            e.preventDefault()
            if (response.length > 0) {
                base.push(response[0]);
                response=[];
                removeAllChildren(document.querySelector(".search-result__wrapper"))
                updateCardsList(document.querySelector(".repos"), base, createCard);
            }
    })
