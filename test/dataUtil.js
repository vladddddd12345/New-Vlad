
import { randomData } from './faker';

export const getData = (args) => {
    const data = { ...args };
    Object.keys(data).forEach((val) => {
        if (data[val] === 'random') {
            data[val] = randomData[val];
        }
    });
    return data;
};