// array
// 查找O(1)
// 增加O(n)
// 删除O(n)

// 链表
// 查询O(n)
// 增加O(1)
// 删除O(1)

// 栈（stack）
// 队列（queue）


class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  append (element) {
    let node = new Node(element)
    let current;
    if(!this.head) {
      this.head = node
    } else {
      current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node
      
    }
    this.length++
  }
}


let stack = []
let str = '[()]()()()()({})'

let left = ['[', '{', '(']
let right = [']', '}', ')']

for(let i in str) {

  if(left.includes(str[i])) {
    stack.push(str[i])
  }else{
    if(stack.length === 0) {
      console.log('不符合1')
      return false
    } else {
      // console.log(left[right.indexOf(str[i])], stack[stack.length-1], stack.length)
      if( left[right.indexOf(str[i])] === stack[stack.length-1] ) {
        stack.pop()
      }else{
        console.log('不符合2')
        return false
      }
    }
  }
}

if(stack.length === 0) {
  console.log('符合1')
}else{
  console.log('不符合')
}

let a = 2;
while (a < 5) console.log(a++) 