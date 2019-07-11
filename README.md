# Coin-Change-JavaScript-Problem


Here are a few resources that helped solve this problem


[http://codeoverdose.com/category/javascript/](http://codeoverdose.com/category/javascript/)
[https://observablehq.com/@khxu/dynamic-programming-with-coins](https://observablehq.com/@khxu/dynamic-programming-with-coins)

[https://medium.com/@omergoldberg/algorithms-in-js-making-change-bc5dec257e97](https://medium.com/@omergoldberg/algorithms-in-js-making-change-bc5dec257e97)
**the biggest takeaway from this article was this:**
“Recursion and Dynamic Programming are two algorithmic approaches which require a lot of patience and practice. The positive side though is, once it clicks you begin to notice that many of these types of problems are very similar, simply with a different back story.”


[https://www.youtube.com/watch?v=Y0ZqKpToTic](https://www.youtube.com/watch?v=Y0ZqKpToTic)
**I found this breakdown/formula to be super helpful… seeing everything laid out on the whiteboard with a simple solution**

solved using dynamic programming
building a two dimensional temporary array

*minimum of 5 or 
num + 1 
	0  1  2  3  4  5  6  7  8  9  10  11
1	0  1  2  3  4  5  6  7  8  9  10  11
5	0  1  2  3  4  1  2  3  4  5   2   3
6	0  1  2  3  4  1  1  2  3  4   2   2
8	0  1  2  3  4  1  1  2  1  2   2   2
