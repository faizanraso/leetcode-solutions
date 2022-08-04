// Merge two sorted linked lists in ascending order

var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) {return list2} //both are blank, doesnt matter which one is returned
    else if(!list1) {return list2}
    else if(!list2) {return list1}
    else{
        let mergedList = new ListNode();
        let mergedHead = mergedList;
        while(true){

            if(!list1 && !list2){
                break;
            }
            else if(!list1){
                mergedList.next = new ListNode(list2.val);
                mergedList = mergedList.next
                list2 = list2.next;
            } else if (!list2){
                mergedList.next = new ListNode(list1.val);
                mergedList = mergedList.next
                list1 = list1.next;
            } else if(list1.val <= list2.val){
                mergedList.next = new ListNode(list1.val);
                mergedList = mergedList.next
                list1 = list1.next;
            } else if(list2.val < list1.val){
                mergedList.next = new ListNode(list2.val);
                mergedList = mergedList.next
                list2 = list2.next
            }
        }
        return mergedHead.next;
    }
    
};