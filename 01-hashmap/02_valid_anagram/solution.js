/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isAnagram = function(s, t) {
//     // 1. Edge case: Độ dài khác nhau thì không thể là anagram
//     if (s.length !== t.length) {
//         return false;
//     }

//     const countMap = new Map();

//     // 2. Bước Nạp (+1) từ chuỗi s
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         countMap.set(char, (countMap.get(char) || 0) + 1);
//     }

//     // 3. Bước Trừ (-1) từ chuỗi t
//     for (let i = 0; i < t.length; i++) {
//         const char = t[i];

//         // Ký tự không tồn tại trong map hoặc số lượng đã bị trừ hết (về 0)
//         if (!countMap.has(char) || countMap.get(char) === 0) {
//             return false;
//         }

//         countMap.set(char, countMap.get(char) - 1);
//     }

//     // 4. Nếu trừ hết mà không phát sinh lỗi thì 2 chuỗi bằng nhau
//     return true;
// };

const isAnagram = function(s, t) {
    console.log(`=== BẮT ĐẦU KIỂM TRA: s = "${s}", t = "${t}" ===`);

    if (s.length !== t.length) {
        console.log(`❌ Độ dài khác nhau (${s.length} !== ${t.length}) -> False\n`);
        return false;
    }

    const countMap = new Map();

    // 1. Nạp ký tự của chuỗi s
    console.log("--- BƯỚC 1: NẠP VÀO MAP TỪ CHUỖI S ---");
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const oldCount = countMap.get(char) || 0;
        countMap.set(char, oldCount + 1);
        console.log(`Nạp ký tự '${char}': Số cũ = ${oldCount} -> Số mới cất vào Map = ${countMap.get(char)}`);
    }

    console.log("-> Trạng thái Map sau khi nạp s:", Object.fromEntries(countMap));

    // 2. Trừ ký tự từ chuỗi t
    console.log("\n--- BƯỚC 2: TRỪ DẦN TỪ CHUỖI T ---");
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        console.log(`\n[Vòng lặp i = ${i}]: Đang xét chữ '${char}'`);

        if (!countMap.has(char)) {
            console.log(`❌ LỖI: Chữ '${char}' không có trong Map -> Trả về False`);
            return false;
        }

        const currentCount = countMap.get(char);
        console.log(`  + Đọc ra: Số lượng chữ '${char}' hiện tại là: ${currentCount}`);

        if (currentCount === 0) {
            console.log(`❌ LỖI: Chữ '${char}' đã bị trừ hết (về 0) mà vẫn đòi thêm -> Trả về False`);
            return false;
        }

        // Cập nhật lại
        countMap.set(char, currentCount - 1);
        console.log(`  + Cất lại vào Map: Giảm '${char}' xuống còn: ${countMap.get(char)}`);
    }

    console.log("\n  Hoàn thành: Tất cả ký tự đều khớp -> Trả về True\n");
    return true;
};

// Chạy thử 2 test case để xem log
isAnagram("aab", "abb");
isAnagram("rat", "car");