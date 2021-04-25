## part 1a)

1. Line 9 prints "values added: 20", which is the sum of num1 and num2.

2. Line 13 prints "final result: 20" , which is the sum of num1 and num2. There are no problems with scope here because the var keyword is used. 

3. Line 9 prints "values added: 20", which is the sum of num1 and num2.

4. Line 13 returns an error because the variable result was defined in the if statement, and thus can not be accessed on line 13.

5. The code here would return an error because the variable result cannot be reassigned as it is a constant.

6. This code would also return an error because since we never entered the if statement, the variable result is not defined, and we are trying to print the value of a variable that has not been defined. 


## part 1b)

1. Line 12 will print '2', as that is the value of the variable i when it exits the for loop. 

2. Line 13 will print '150' as that is the value of the variable discountedPrice when it exits the for loop.

3. Line 14 will print '150' as that is the value of the variable finalPrice when it exits the for loop.

4. This function will return an array of all the discounted prices, which will be [50, 100, 150]. There will be no issues with scope as the var keyword is being used.

5. There will be an error at line 12 because the let keyword is being used, which means the variable 'i' will be out of scope at line 12. 

6. There will be an error at line 13 because the let keyword is being used, which means the variable 'discountedPrice' will be out of scope at line 13.

7. Line 14 will print '150' as that is the value of the variable finalPrice when it exits the for loop. There are no issues with scope as finalPrice is not declared in the for loop.

8. This function will return an array of all the discounted prices, which will be [50, 100, 150]. There are no issues with scope as discounted is declared in the function. 

9. There will be an error at line 11 because the let keyword is being used, which means the variable 'i' will be out of scope at line 12. However, the code will not cause any errors as we are allowed to push values into a const array.

10. Line 12 will print '3' as that is the length of the prices array that is passed into the function. There are no issues with scope as the variable is declared in the function. 

11. This function will return an array of all the discounted prices, which will be [50, 100, 150]. There are no issues with the scope as discounted is declared in the function, and we are allowed to push values into a const array. 

12. A) student.name

	B) alert(student['Grad Year'])

	C) student.greeting()

	D) alert(student['Favorite Teacher'].name)

	E) student.courseLoad[0]

13. A) '32'

	B) 1

	C) 3

	D) '3null'

	E) 4

	F) 0

	G) '3undefined'

	H) NaN

14. A) true

	B) false

	C) true

	D) false

	E) false

	F) true

15. In Javascript, the '==' is used for comparing two variables, but the datatype of the variable is ignored in this comparison. However, the '===' is used for comparing two variables, but with this operator, the datatype is also checked. 

16. (see javascript file for this question)

17. The result of the code would be an array with the values [2,4,6]. This would be because for every value in the array that is being passed in as a parameter, we call the doSomething function which doubles its value, and then push that new value into the newArr that we will be returning. This results in an array with all the values doubled being returned. 

18. (see javascript file for this question)

19. The output of the code is 1, 4, 3, 2. This is because 1 and 4 are printed first because they have no timeouts associated to them. Then comes 3 because its TimeOut has no delay, and then 2 because its TimeOut has a delay of 1000ms.

