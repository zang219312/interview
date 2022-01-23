// 闭包
function fn() {
  var arr = []
  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i
    }
  }
  return arr
}

var list = fn()
console.log(list)

for (const iterator of list) {
  console.log(iterator())
}
