/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */

var countMentions = function (numberOfUsers, events) {

    events = events.sort((ev1, ev2) => {
        const ev1_time = Number(ev1[1]);
        const ev2_time = Number(ev2[1])
        if (ev1_time === ev2_time){
            if (ev1[0] === "OFFLINE"){
                return -1;
            }
            else {
                return 1;
            }
        }
        return ev1_time - ev2_time;
    })

    console.log(events);

    const counts = Array(numberOfUsers).fill(0);
    const timestamps = Array(numberOfUsers).fill(0);

    for (let i = 0; i < events.length; i++) {
        let type = events[i][0];
        let e_time = Number(events[i][1]);
        let mention_str = events[i][2]

        // IF MESSAGE
        if (type === "MESSAGE") {

            // IF ALL -> INCREASE ALL COUNTS
            if (mention_str === "ALL") {
                for (let j = 0; j < counts.length; j++) {
                    counts[j]++;
                }
            }

            // IF HERE -> INCREASE ALL ONLINE
            else if (mention_str === "HERE") {
                for (let j = 0; j < counts.length; j++) {
                    let u_time = timestamps[j];
                    if (u_time <= e_time) {
                        counts[j]++;
                    }
                }
            }

            // ELSE MENTIONS -> INCREASE MENTIONS 
            else {
                const men_arr = mention_str.split(" ");
                for (let j = 0; j < men_arr.length; j++) {
                    let id = Number(men_arr[j].match(/\d+/));
                    counts[id]++;
                }
            }

        }

        // IF OFFLINE 
        else if (type === "OFFLINE") {
            let id = Number(mention_str);
            timestamps[id] = e_time + 60;
        }
        console.log(counts, timestamps, "EVENT" + i + 1);
    }

    return counts;


};
