/* global console */
'use strict';

var book = {
    pages: 10,

    get thickness () { return this.pages * 0.1; },
    set thickness (n) { this.pages = n / 0.1; }
};

console.log(book.thickness);
book.thickness = 20;
console.log(book.pages);