// js数据类型判断
var a = [
  null,
  undefined,
  1,
  "string",
  true,
  [123],
  { val: 1212 },
  function xx() {
    console.log(1);
  },
  /\s+/g,
  new Date(),
  Math.floor(12.33)
];

// 普通方案
a.forEach(function(item) {
  var type = typeof item;
  console.log("item: " + item, ", type: " + type);
});

// 运行后发现typeof只能检测出基本类型，引用类型的不实用；
// 个别类型检测，有很明显的局限性如：
// 1.Array.isArray() 适用于数组
// 2.constructor null、undefined不适用
// 3.instanceof 同上

// 升级方案
a.forEach(function(item) {
  var type = Object.prototype.toString.call(item);
  console.log("item: " + item, ", type: " + type);
});
