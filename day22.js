const information = {
    creator: "Brendan Eich",
    created: 1995,
    standard: "ECMAScript",

    environment:
        typeof window !== "undefined"
            ? "Browser"
            : "Unknown",

    promise:
        typeof Promise !== "undefined"
            ? "Yes"
            : "No",

    map:
        typeof Map !== "undefined"
            ? "Yes"
            : "No",

    set:
        typeof Set !== "undefined"
            ? "Yes"
            : "No",

    localStorage:
        typeof localStorage !== "undefined"
            ? "Yes"
            : "No"
};

console.table(information);