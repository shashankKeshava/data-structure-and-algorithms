// Problem Statement: https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

function insertNodeAtPosition(head, data, position) {
	var tempLL = head;
	var count = 0;
	var prev;
	var tempHead = tempLL;

	while (count < position) {
		count++;
		prev = tempLL;
		tempLL = tempLL.next;
	}
	var newNode = new SinglyLinkedList();
	newNode.data = data;
	newNode.next = tempLL;
	prev.next = newNode;

	return tempHead;
}
