/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    //! No start node failed
    if (!times.find(connect => connect[0] === k)) {
        return -1;
    }

    const arrivedSpendTime = new Array(n).fill(-1);
    //! Set start point
    arrivedSpendTime[k-1] = 0;
    let fallConnection;
    for(let i = 0; i < times.length; i++) {
        let time = times[i];
        // console.log(`Turn: ${time.toString()} / Current: ${arrivedSpendTime.toString()}`);
        const startNode = time[0] - 1;
        const targetNode = time[1] - 1;
        if (arrivedSpendTime[startNode] !== -1) {
            if (arrivedSpendTime[targetNode] === -1) {
                arrivedSpendTime[targetNode] = arrivedSpendTime[startNode] + time[2];
                // console.log(`${targetNode} is ${arrivedSpendTime[targetNode]}`);
            } else {
                arrivedSpendTime[targetNode] = Math.min(arrivedSpendTime[targetNode], arrivedSpendTime[startNode] + time[2]);
                //! problem: Max time may be a temp one
            }
        } else {
            if (fallConnection === time) {
                return -1;
            } else if (!fallConnection) {
                fallConnection = time;
            }
            //# Solve it later
            times.push(time);
        }
        //! problem: if they change the order of startNode in times, the result might be
    }

    // Get max time
    return arrivedSpendTime.find(time => time == -1) ? -1 : Math.max(...arrivedSpendTime);
    // let maxTime = 0;
    // for (let i = 0; i < arrivedSpendTime.length; i++) {
    //     // Check if every node has been visited
    //     if (arrivedSpendTime[i] === -1) {
    //         return -1;
    //     } else {
    //         maxTime = Math.max(maxTime, arrivedSpendTime[i]);
    //     }
    // };
    // return maxTime;
};