export function createTag (tagName = "div", tagClasses = '', tegText = '', event = '') {
    const tag = document.createElement(tagName);
    if (tagClasses) tag.className = tagClasses;
    if (tegText) tag.textContent = tegText;
    if (event) {
        tag.addEventListener(event.name, event.func)
    }
    return tag;
}

export function updateCardsList(wrapperElement, cards, fn) {
    removeAllChildren(wrapperElement)
    cards.forEach(card => {
        wrapperElement.appendChild(fn(card));
    })
}

export function removeAllChildren (parent) {
    parent.innerHTML = ''
}