import {response} from "./index";

export async function fetchWebpack(searchText) {
    try {
        let data = await fetch(`https://api.github.com/search/repositories?q=${searchText}&per_page=5`)
        let resp = await data.json()
        resp.items.forEach((item)=> {
            response.push({
                id: item.id,
                name: item.owner.login,
                repoName: item.name,
                stars: item.stargazers_count
            })
        })
    } catch (e) {
        console.log(e)
    }
}

export function debounceFetch (func, time) {
    let checker = 0;
    return function (...args) {
        const fn = func.bind(this, ...args);
        let secChecker = checker + 1;
        checker += 1
        setTimeout(()=>{
            if (checker === secChecker) {
                fn();
            }
        }, time)
    }
}

