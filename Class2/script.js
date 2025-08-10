// 1.trim():- removes whitespaces from both end of the string
// let text = "                              Hello World!    ";
// let newtext = text.trim();
// console.log(text)
// console.log(newtext);

// let msg = "        jasim";
// console.log(msg.trim());



// 2.toUpperCase():- convert all letter in upper case
// let text = "Hello WOrld";
// console.log(text.toUpperCase());

// let text = "Hello World";
// let uppertext = text.toUpperCase();
// console.log(uppertext);
// console.log(text);


// 3.toLowerCase():- convert all letter in lower case
// let text = "Hello WOrld";
// console.log(text.toLowerCase());

// let text = "Hello World";
// let Lowertext = text.toLowerCase();
// console.log(Lowertext);
// console.log(text);



// 4.indexOf: return the first index of occurrence of some value in string or gives -1 if not found.
// let str = "Iloveyou";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("e"));
// console.log(str.indexOf("o"));
// console.log(str.indexOf("you"));
// console.log(str.indexOf("Love"));



// method chaining: Method chaining in JavaScript means calling multiple methods on the same object in a single statement, one after another.
// let str = "   i love you   ";
// let result = str.trim().toUpperCase().indexOf("love");
// console.log(result); 

// let str = "   i love you   ";
// let result = str.trim().toUpperCase();
// console.log(result); 




// 6. slice(): slice() is a string method that extracts a portion of a string and returns it as a new string without modifying the original.
// let str = "IloveCoding";
// console.log(str.slice(5));
// console.log(str.slice(2));
// console.log(str.slice(1,4));
// console.log(str.slice(-3));


// 7. substring(): it also extract a portion of string but in this negative index treated as zero and if start index > end index then it swap automatically
// let str = "I love you";
// console.log(str.substring(-3));  
// console.log(str.substring(6, 2)); 



// 8. replace(): The replace() method returns a new string where some or all matches of a pattern are replaced by a replacement.
// let text = "I love you. You are my love.";
// let newText = text.replace("love", "like");
// console.log(newText); 


// 9. replaceAll(): replaces every occurrence if searchValue is a string.
// let text = "I love you. You are my love.";
// console.log(text.replaceAll("love", "like"));



// 10.repeat(): Creates and returns a new string by repeating the original string a specified number of times.
// let str = "Mango";
// let newStr = str.repeat(3);
// console.log(newStr);



// let msg = "   help!   ";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// let collegeName = "Apna College"
// console.log(collegeName.slice(4).replace("l","t"));



// 11. split(): The JavaScript split() method divides a string into an array of substrings based on a specified separator, such as a character, string, or regular expression.
// let str = "Hello and Welcome to India of";
// let newStr = (str.split(" "));
// let newStr2 = (str.split(" ",2));
// let newStr3 = (str.split("o"));
// let newStr4 = (str.split("o",2));
// console.log(newStr);
// console.log(newStr2);
// console.log(newStr3);
// console.log(newStr4);


// 12.padStart(): It is used to add extra character at the begining.
// let str = "42";
// console.log(str.padStart(5));
// console.log(str.padStart(5,"A"));


// 12.padEnd(): It is used to add extra character at the end.
// let str = "42";
// console.log(str.padEnd(5));
// console.log(str.padEnd(5,"A"));