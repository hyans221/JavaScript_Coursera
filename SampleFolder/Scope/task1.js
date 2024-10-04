{
    var ten = "thy";
    let ho = "ha";
    const va = "van";

    // Thử gán lại các biến trong khối
    ten = "new thy"; // Không có lỗi
    ho = "new ha"; // Không có lỗi
    // va = "new van"; // Lỗi: Assignment to constant variable.
}

console.log(ten); // "new thy"
try {
    console.log(ho); // Lỗi: ho is not defined
} catch (e) {
    console.error(e.message);
}
try {
    console.log(va); // Lỗi: va is not defined
} catch (e) {
    console.error(e.message);
}

// Thử gán lại các biến ngoài khối
ten = "outside thy"; // Không có lỗi
try {
    ho = "outside ha"; // Lỗi: ho is not defined
} catch (e) {
    console.error(e.message);
}
try {
    va = "outside van"; // Lỗi: va is not defined
} catch (e) {
    console.error(e.message);
}

console.log(ten); // "outside thy"
// ------------------------------------------------
