function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const newArray1 = mergeSort(array.slice(0, mid));
    const newArray2 = mergeSort(array.slice(mid));

    return [...mergeTwoArray(newArray1, newArray2)];
}

function mergeTwoArray(array1, array2) {
    let i = 0;
    let j = 0;

    const newArray = [];

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            newArray.push(array1[i++]);
        } else {
            newArray.push(array2[j++]);
        }
    }

    while (i < array1.length) {
        newArray.push(array1[i++]);
    }

    while (j < array2.length) {
        newArray.push(array2[j++]);
    }

    return newArray;
}

function testMergeSort() {
    const testCases = [
        { input: [], expected: [] },
        { input: [1], expected: [1] },
        { input: [2, 1], expected: [1, 2] },
        { input: [4, 2, 7, 1, 3], expected: [1, 2, 3, 4, 7] },
        { input: [10, 9, 8, 7, 6], expected: [6, 7, 8, 9, 10] },
        { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [5, 1, 8, -2, 0], expected: [-2, 0, 1, 5, 8] },
        { input: [9, 4, 7, 3, 1, 6, 2, 8, 5], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { input: [4, 5, 4, 3, 3, 2, 1, 1, 0], expected: [0, 1, 1, 2, 3, 3, 4, 4, 5] },
    ];

    let allTestsPassed = true;

    testCases.forEach(({ input, expected }, index) => {
        const result = mergeSort(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
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
testMergeSort();
