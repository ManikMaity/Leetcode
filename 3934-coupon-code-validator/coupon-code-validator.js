var validateCoupons = function(code, businessLine, isActive) {
    const order = {
        electronics: 0,
        grocery: 1,
        pharmacy: 2,
        restaurant: 3
    };

    const valid = [];

    for (let i = 0; i < code.length; i++) {
        if (
            isActive[i] &&
            /^[a-zA-Z0-9_]+$/.test(code[i]) &&
            order.hasOwnProperty(businessLine[i])
        ) {
            valid.push({
                code: code[i],
                business: businessLine[i]
            });
        }
    }

    valid.sort((a, b) => {
        if (order[a.business] !== order[b.business]) {
            return order[a.business] - order[b.business];
        }
        return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
    });

    return valid.map(v => v.code);
};
