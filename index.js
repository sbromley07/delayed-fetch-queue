const DelayedFetchQueue = intervalParam => {
    let interval = intervalParam;
    let queue = [];
    let intervalId;

    const setInterval = newInterval => {
        interval = newInterval;
    }

    const start = () => {
        intervalId = setInterval(interval, remove);
    };

    const stop = () => {
        clearInterval(intervalId);
    }

    const add = request => {
        queue.push(request);
    };

    const remove = () => {
        if (queue.length > 0) {
            return fetch(queue[0]);
        }
    };
}

module.exports = DelayedFetchQueue;
