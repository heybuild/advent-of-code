import { readFileSync } from "fs";

const numbers: Record<string, number> = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}

const patterns = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
]

type Pair = { position: number, value: string }

const findFirstAndLastPair = (line: string) => {
    let first: Pair = { position: Infinity, value: "" };
    let last: Pair = { position: -Infinity, value: "" };

    for (const pattern of patterns) {
        const startPosition = line.indexOf(pattern);

        if (startPosition === -1) continue;

        if (startPosition < first.position) {
            first = { position: startPosition, value: pattern };
        }

        const endPosition = line.lastIndexOf(pattern);
        if (endPosition > last.position) {
            last = { position: endPosition, value: pattern };
        }
    }

    return parseInt(`${parseNumber(first.value)}${parseNumber(last.value)}`, 10);
}

export const calculateSum = (lineList: string[]) => {
    const calibrationValues: number[] = [];

    lineList.forEach(line => {
        const digit = findFirstAndLastPair(line)
        calibrationValues.push(digit);
    });

    return calibrationValues.reduce((digit, _sum) => _sum + digit);
};

const parseNumber = (candidate: string | number | undefined): number => {
    if (!candidate) return 0;
    if (typeof candidate === "number")
        return candidate;
    if (typeof candidate === "string" && candidate.match(/[0-9]/g))
        return parseInt(candidate, 10);
    return numbers[candidate];
}

const file = readFileSync("./input.txt", "utf-8");
const lineList = file.split(/\r?\n/);

const sum = calculateSum(lineList);

console.log(`the sum is: ${sum}`);