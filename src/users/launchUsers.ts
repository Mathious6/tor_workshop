import {user} from "./user";

export async function launchUsers(n: number) {
    const promises = [];

    for (let index = 0; index < n; index++) {
        const newPromise = user(index);
        promises.push(newPromise);
    }

    return await Promise.all(promises);
}
