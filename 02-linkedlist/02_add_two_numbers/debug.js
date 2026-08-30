function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createLinkedList (arr){
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const num of arr){
        cur.next = new ListNode(num);
        cur = cur.next;
    }
    return dummy.next;
}

var addTwoNumbers = function (l1,l2){
    let goc = new ListNode(0);
    let conTro = goc;
    let nho = 0;

    while (l1 !== null || l2 !== null || nho > 0){
        let so1 = 0;
        if (l1 !== null){
            so1 = l1. val;
        }

        let so2 = 0;
        if (l2 !== null){
            so2 = l2.val;
        }

        let tong = so1 + so2 + nho;
        nho = Math.floor(tong/10);
        let chuSoLuu = tong % 10; 

        let nodeMoi = new ListNode (chuSoLuu);
        conTro.next = nodeMoi;
        conTro = conTro.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return goc.next;
};

const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);


const result = addTwoNumbers(l1, l2);
console.log ("Done!");