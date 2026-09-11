# 1290. Convert Binary Number in a Linked List to Integer

- **Mức độ:** Easy
- **Chủ đề:** Linked List, Math

---

## 1. Đề bài tóm tắt
- Cho `head` của một danh sách liên kết đơn (Singly Linked List), mỗi node chỉ chứa giá trị `0` hoặc `1`.
- Toàn bộ danh sách ghép lại thành một biểu diễn số nhị phân.
- **Yêu cầu:** Chuyển đổi và trả về giá trị số nguyên hệ thập phân (decimal) tương ứng.

---

## 2. Ý tưởng giải quyết
- Dùng một con trỏ `current` xuất phát từ `head` để duyệt qua từng node của danh sách.
- Khởi tạo một chuỗi rỗng `str = ""`.
- Trong khi duyệt:
  - Nối giá trị `current.val` vào chuỗi: `str += current.val`.
  - Di chuyển con trỏ sang node kế tiếp: `current = current.next`.
- Sau khi duyệt hết danh sách, dùng hàm `parseInt(str, 2)` để đổi chuỗi nhị phân thành số nguyên hệ 10.

---