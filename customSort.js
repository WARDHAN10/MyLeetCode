const customSort = (order, s) => {
        s = String(s)
            .split("")
            .sort((a, b) => {
                let one=String(order).indexOf(a),two =String(order).indexOf(b)
            if ( one== -1 && two != -1) {
                return 1;
            } else if (
                one != -1 &&
                two == -1
            ) {
                return -1;
            } else {
                if (one > two) {
                return 1;
                }
                return -1;
            }
            })
            .join("");
        return s;
};

console.log(customSort("cba", "abcd"));
