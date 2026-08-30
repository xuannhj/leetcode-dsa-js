# 01 - Two Sum

- **Độ khó:** Easy
- **Chủ đề:** Array / Hash Table
- **Cú pháp trọng tâm:** JavaScript `Map`, `const` vs `let`, Dynamic Array return

---

### 1. Ý tưởng & Hướng tiếp cận (Approach)

* **Cách 1: Vét cạn (Brute Force)**
  * Dùng 2 vòng lặp lồng nhau: vòng ngoài chọn `nums[i]`, vòng trong quét `nums[j]` từ `i + 1` để tìm cặp có tổng bằng `target`.
  * *Hạn chế:* Chạy chậm khi mảng lớn vì tốn $O(n^2)$ thời gian.

* **Cách 2: Tối ưu với Bảng băm (HashMap / Map)**
  * Tại mỗi số `currentNum`, số còn thiếu để ghép đôi là: `complement = target - currentNum`.
  * Dùng `Map` làm sổ tay lưu trữ dạng `key : value` $\rightarrow$ `Số đã gặp : Vị trí (index) của nó`.
  * Với mỗi bước duyệt:
    1. Kiểm tra xem `complement` đã có trong `Map` chưa (`map.has(complement)`).
    2. Nếu **đã có**: Trả về ngay `[map.get(complement), i]` và kết thúc.
    3. Nếu **chưa có**: Lưu số hiện tại vào `Map` (`map.set(currentNum, i)`) để phục vụ các số tiếp theo.

---

### 2. Kiến thức & Cú pháp JavaScript cần nhớ

* **`const` vs `let`:**
  * Luôn ưu tiên dùng `const`. Dùng cho biến không gán lại bằng dấu `=` (kể cả `Map`, `Object`, `Array` dù có thêm/sửa phần tử bên trong).
  * Chỉ dùng `let` khi giá trị biến cần thay đổi (ví dụ: biến đếm `i` trong vòng lặp `for (let i = 0; ...)`).
  * Không dùng `var` vì cú pháp cũ, dễ lỗi phạm vi biến (scope).

* **Đối tượng `Map` trong JS:**
  * `const map = new Map();` $\rightarrow$ Khởi tạo Map.
  * `map.has(key)` $\rightarrow$ Kiểm tra key có tồn tại không (trả về `true`/`false`).
  * `map.get(key)` $\rightarrow$ Lấy giá trị theo key.
  * `map.set(key, value)` $\rightarrow$ Thêm mới hoặc cập nhật cặp key-value.

* **Cách trả về mảng trong JS (Dynamic Typing):**
  * Phần chú thích `/** @param ... */` ở đầu bài chỉ là mô tả kiểu dữ liệu (JSDoc), JS bỏ qua khi chạy.
  * Để trả về mảng 2 phần tử, không cần khai báo `new int[]` như Java, chỉ cần dùng cú pháp literal: `return [map.get(complement), i];`.

---

### 3. Đánh giá độ phức tạp (Complexity)

* **Time Complexity:** $O(n)$ — Duyệt mảng 1 lần, các thao tác tra cứu `Map` tốn $O(1)$ trung bình.
* **Space Complexity:** $O(n)$ — Lưu tối đa $n$ phần tử trong `Map`.

---

### 4. Code Solution (JavaScript)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(currentNum, i);
    }

    return [];
};