

// 单例模式 实例的个数限制为一个，在 Node.js 中创建实例模式非常简单，只需要 require 即可
// 无论你在应用 require 中依赖这个模块多少次，这个模块的实例只会有一份存在 
const PI  = Math.PI

function circle (radius) {  
  return radius * radius * PI;
}

module.exports.circle = circle
