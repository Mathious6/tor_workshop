import {simpleOnionRouter} from "./simpleOnionRouter";

export async function launchOnionRouters(n: number) {
    const promises = [];

    for (let index = 0; index < n; index++) {
        const newPromise = simpleOnionRouter(index);
        promises.push(newPromise);
    }

    return await Promise.all(promises);
}
