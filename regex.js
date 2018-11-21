
// ------ Match | Start | ------
var StringToMatch = "23-someString"

n = StringToMatch.match(/^(\d+)-someString$/)[1]
// n will be 23 due to (\d+) 

n = StringToMatch.match(/^(\d+)-someString$/)[1]
// n will be [ '23-someString', '23', index: 0, input: '23-someString' ]
// ------ Match | End | ------
