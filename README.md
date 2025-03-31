# JavaScripts-Practice

## How to define function?

### Function declaration

**Method 1**:

```javascript
function name(param1, param2, ...) {
  // statements
}
```

### Function expression

**Method 1: (without define a name)**

```javascript
function (para...) {
statement;
};
```

**Method 2: Arrow Function Expression <- function expression 的省略版**

```
- () => expression
- param => expression
- (para ...) => expression
- para => { return expression }
```

關於 Arrow Expression 相關的特性

1. 如果只有一個 parameter，不需括號。
2. 如果沒有加上{ }，則會直接 return 括號內的值。
3. Arrow Expression 沒有 this 關鍵字的綁定，不能作為 Objects 的 Methods.

### What is first-class object in JS?

如果是 first-class object 的話，有以下特性：

1. 將 function 分配給變數。
2. 將 function 作為 arugment 傳給其他 function
