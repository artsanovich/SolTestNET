function a(a, b) {
   this.indexA = a;
   this.indexB = b; 
   sum(this.indexA, this.indexB);
}

function sum(a, b) {
  a + b
}
