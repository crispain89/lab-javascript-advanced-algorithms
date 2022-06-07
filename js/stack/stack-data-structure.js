class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) return true
   return false 
  }

  isEmpty() {
    if (this.stackControl.length === 0) return true
    return false
  }

  push(item) {
    let noLlena = this.canPush();
    if (noLlena) {
      this.stackControl.push(item)
      return this.display()
    } else {

      throw new Error('STACK_OVERFLOW');
    }

}

  pop() {
    if (!this.isEmpty()) {
      return this.stackControl.pop();
    } else { 
      throw new Error('STACK_UNDERFLOW');
    }
   
  }

  display() {
   return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
