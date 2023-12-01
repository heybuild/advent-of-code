import { calculateSum } from './v2'
37 + 24 + 13 + 21 + 41 + 67 + 33 + 39 + 36 + 76 + 45 + 33 + 49 + 71 + 28 + 99 + 23 + 25 + 13 + 64 + 82
// 3tlz7fjzpgnvfgdgqbrqqsv - 37
// mcp213six4jjqtgxpkzh - 24
// one7nineqnjsgcjnjmdhdrxbthree - 13
// xzvxcvpdftpllcxvpbtwoxkspeightvmfhlqxklthree1 - 21
// nnzksztgtpfour61mfjmvnonezgvhdg - 41
// qkj6one5one49g7 - 67
// threesix6eightlxdkttbbcz3bbvgnxjnjf - 33
// 3fivenine - 39
// 3sixhmbnfrk - 36
// 7qcjzchtkssix - 76
// vsfour5nqjjzmx - 45
// cdxhcsrhvc3 - 33
// 47hjzgbpsixjjfsbhninerfbrvf - 49
// seven8sevenptdlvvgssixvjvzpvsp7fivefourtwoned - 71
// ctwonezxpflzeightczjnvj7173eight - 18
// ldklqc91fiveeighteight9 - 99
// pptwo6sevenfivevlgs8threegbpc - 23
// ctwoneone7dtztzrk3ninefivexvj - 25
// 1oneninegspfm3four43 - 13
// sixfourgkdlxtqmbzkgmpmcsevenhzrt4 - 64
// eight6twojtzlvlhgjncvx - 82

it("works", () => {
    const input = [
        "3tlz7fjzpgnvfgdgqbrqqsv",
        "mcp213six4jjqtgxpkzh",
        "one7nineqnjsgcjnjmdhdrxbthree",
        "xzvxcvpdftpllcxvpbtwoxkspeightvmfhlqxklthree1",
        "nnzksztgtpfour61mfjmvnonezgvhdg",
        "qkj6one5one49g7",
        "threesix6eightlxdkttbbcz3bbvgnxjnjf",
        "3fivenine",
        "3sixhmbnfrk",
        "7qcjzchtkssix",
        "vsfour5nqjjzmx",
        "cdxhcsrhvc3",
        "47hjzgbpsixjjfsbhninerfbrvf",
        "seven8sevenptdlvvgssixvjvzpvsp7fivefourtwoned",
        "ctwonezxpflzeightczjnvj7173eight",
        "ldklqc91fiveeighteight9",
        "pptwo6sevenfivevlgs8threegbpc",
        "ctwoneone7dtztzrk3ninefivexvj",
        "1oneninegspfm3four43",
        "sixfourgkdlxtqmbzkgmpmcsevenhzrt4",
        "eight6twojtzlvlhgjncvx",
    ]

    const sum = calculateSum(input);

    expect(sum).toEqual(919);
})