function fibs(n, item1 = 0, item2 = 1) {
    if (n < 2) {
        return n === 1 ? [item1] : [];
    }

    const series = [item1, item2];

    for (let i = 0; i < n - 2; i++) {
        series.push(series.at(-2) + series.at(-1));
    }

    return series;
}

function fibsRec(n, item1 = 0, item2 = 1) {
    if (n < 2) {
        return n === 1 ? [item1] : [];
    }

    return [item1, ...fibsRec(n - 1, item2, item1 + item2)];
}

function test(fibs) {
    const testCases = [
        { input: 0, expected: [] },
        { input: 1, expected: [0] },
        { input: 2, expected: [0, 1] },
        { input: 5, expected: [0, 1, 1, 2, 3] },
        { input: 8, expected: [0, 1, 1, 2, 3, 5, 8, 13] },
        { input: 10, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
    ];

    let allTestsPassed = true;

    testCases.forEach(({ input, expected }, index) => {
        const result = fibs(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${index + 1}: ${passed ? "PASSED" : "FAILED"}`);
        if (!passed) {
            allTestsPassed = false;
            console.log(`  Input: ${input}`);
            console.log(`  Expected: ${expected}`);
            console.log(`  Received: ${result}`);
        }
    });

    if (allTestsPassed) {
        console.log("All tests passed!");
    } else {
        console.log("Some tests failed.");
    }
}

// Run the test
test(fibs);

console.log();

test(fibsRec);
