import { readFileSync } from "fs";

const calibrationValues: number[] = [];

const file = readFileSync("./input.txt", "utf-8");

file.split(/\r?\n/).forEach(line => {
    const allDigits = line.match(/[0-9]/g);
    const firstDigit = allDigits?.shift();
    const lastDigit = allDigits?.length ? allDigits?.pop() : firstDigit;

    calibrationValues.push(parseInt(`${firstDigit}${lastDigit}`, 10));
});

const sum = calibrationValues.reduce((digit, _sum) => _sum + digit);

console.log(`the sum is: ${sum}`);
