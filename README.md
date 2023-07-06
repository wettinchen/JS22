## JavaScript Chapter 22
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 22
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Insure the DOM is available to interact with
        只顯示 view2；宣告指派 document.querySelector 和 # 選取 id，id 名稱為 view2

###  2. How to load your script for DOM interaction
        script 應在 html 標籤執行後運行。 defer 屬性的 scripts 能在 html 標籤執行後運行。。

###  3. Syntax: addEventListener(event, function, useCapture)
        宣告 div 使用 document.querySelector() 選取 div；
        宣告 h2 使用 document.querySelector() 從 div 選取 h2，
        並列出 addEventListener() 語法

###  4. Using a function name in the event listener
        使用 addEventListener()加入事件到 h2， 事件為點擊 h2，函數名稱為 doSomething，不在捕獲階段執行

###  5. Removing a function with a name: removeEventListener()
        使用 removeEventListener() 移除 h2 事件

###  6. Using an anonymous function in the event listener
        (1)使用 addEventListener()加入點擊事件到 h2，點擊後回傳結果到 h2
        (2)使用 Node.textContent 修改回傳文字為 Clicked
        (3)可以將 anonymous function 改為 function 語法，回傳結果相同

###  7. Listening for the readystatechange event
        使用 addEventListener() 加入 readystatechange 事件，完成後回傳 readyState: complete

###  8. Constructing an initApp() function
        在 addEventListener() 建構 initApp() 函數。宣告 initApp 函數 指派 view, div, h2 從對應的 DOM 提取，view 設定 Node.style.background 點擊背景變為紫色。div 設定 Node.style.background 點擊背景變為藍色。h2 設定 Node.target.textContent 點擊文字變為 Clicked。

###  9. Event Bubbling
        點擊 h2 文字變為 Clicked，div 背景變為藍色，view 背景變為紫色；僅 div 背景變為藍色，view 背景變為紫色；僅 view 背景變為紫色；

### 10. Event Capturing
        將 addEventListener() 的 useCaption 修改為 true

### 11. Event Propagation and stopPropagation()
        使用 stopPropagation() 觀察事件傳遞
        (1)由外向內傳遞，僅 view 背景變為紫色；
        (2)由內向外傳遞，僅 h2 文字變為 Clicked；
        (3)由內向外傳遞，h2 文字變為 Clicked，div 背景變為藍色；

### 12. event.target usage
        觀察 event.target 的用法

### 13. classList, add, remove, and toggle
        (1)使用 element.classList 搭配 add 加入紫色，搭配 remove 移除深藍色
        (2)使用 element.classList 搭配 toggle 加入尚未加入的紫色，移除尚未移除的深藍色；移除尚未移除的紫色，加入尚未加入的深藍色
        (3)使用 element.classList 搭配 toggle 加入尚未加入的藍色，移除尚未移除的黑色；移除尚未移除的藍色，加入尚未加入的黑色
        (4)宣告 myText 為文字轉換的事件 event.target.textContent;，使用 ternary operator 條件式，當 myText 為 My 2nd View，切換文字為 Clicked；當 myText 為 Clicked，切換文字為 My 2nd View
        (5)當滑鼠游標懸浮在 nav 上方，nav 往下增加 100px；第二次滑鼠游標懸浮，nav 沒有變化
        (6)當滑鼠游標懸浮在 nav 上方，nav 往下增加 100px
        (7)當滑鼠游標懸浮在 nav 上方，nav 往下增加 100px；滑鼠游標未懸浮，nav 恢復原狀

### 14. Listening for a HTML Form submit event
        只顯示 view3；指派 document.addEventListener，如果表單狀態完成，執行 initApp() 函數

### 15. HTML Form default behavior
        宣告 myForm 從 myForm DOM 提取，當執行表單按鈕 submit 時，回傳文字 submit event。但預設重置，無法看見 submit event，表單的文字同樣消去

### 16. Prevent default behavior with event.preventDefault()
        使用 event.preventDefault() 防止表單重置
