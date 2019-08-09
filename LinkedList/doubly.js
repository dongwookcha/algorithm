class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = new Node('head');
    }

    find(item){
        let currNode = this.head;
        while(currNode.element !== item){
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item){
        let newNode = new Node(newElement);
        let current = this.find(item);
        if(current.next == null){
            newNode.next = null;
            newNode.prev = current;
            current.next = newNode;
        } else {
            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
        }
    }

    display(){
        let currNode = this.head;
        while(!(currNode.next === null)){
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    remove(item){
        let currNode = this.find(item);
        if(!(currNode.next === null)){
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
        }
    }

    findLast(){
        let currNode = this.head;
        while(!(currNode.next === null)){
            currNode = currNode.next;
        }
        return currNode;
    }

    displayReverse(){
        let currNode = this.head;
        currNode = this.findLast();
        while(!(currNode.prev === null)){
            console.log(currNode.element);
            currNode = currNode.prev;
        }
    }
}

const ll = new DoublyLinkedList();
ll.insert("Seoul","head");//head->Seoul
ll.insert("Busan","Seoul");//head->Seoul->Busan
ll.insert("Daegu","Seoul");//head->Seoul->Daegu->Busan
ll.insert("Incheon","Busan");//head->Seoul->Daegu->Busan->Incheon
ll.display();//Seoul->Daegu->Busan->Incheon
ll.displayReverse()
