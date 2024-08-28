let i = 3;

const f = () => {
    if (i <= 0) return;
    console.log(i);
    i--;
    f();
}

f();