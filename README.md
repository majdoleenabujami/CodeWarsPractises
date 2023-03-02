# CodeWarsPractises

# Task 3 Description (sum without the highest and lowest numbers):

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example { 6, 2, 1, 8, 10 } => 16 { 1, 1, 11, 2, 3 } => 6 Input validation 

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

***solution steps:***
1- return null if array is empty
2- give the max number
3- give the min number
4- new array without the max and min values
5- sum the array elemant without max number and min number"

***notes***
1- في الحل التاني لو عملنا الفيليتر في سطر و الرديوس في سطر لحال كانت المصفوفة ما حتنجمع إنظا فقط حيعطينا مصفوفة بدون اكبر وأصغر عدد فعشان هيك حطيناهم بنفس السطر حتى اطبق الرديوز عنفس المصفوفة الجديدة
2- بنستخدم الفيلتر لما بدنا نطبق شرط معين على عناصر المصفوفة ونخزن المصفوفة إلي مطبق غليها الشرط في مكان جديد

3- بنستخدم ... عشان تفصل النصفوفة لعنصر عنصر 

# task 4 Description :
