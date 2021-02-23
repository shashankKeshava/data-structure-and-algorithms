Task
Write a function that receives two strings and returns the number of characters we would need to rotate the first string forward to match the second.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string can be rotated 5 characters forward to produce the second string, so 5 would be returned. Here are the steps:

no rotations: "fatigue"
1st rotation: "efatigu" 
2nd rotation: "uefatig"
3rd rotation: "guefati"
4th rotation: "iguefat"
5th rotation: "tiguefa"
If the second string isn't a valid rotation of the first string, the method should return -1.

Specification
shiftedDiff(first, second)
computes the number of rotations to make string first equal to string second, if possible

Parameters
first: String - string to be rotated

second: String - target string to be matched by rotating first

Return Value
Number - Number of rotations needed to turn string first into second, -1 if invalid

Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
