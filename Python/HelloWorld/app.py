# PYTHON NOTES

# print("Hello World")
# print("*" * 10)
# print("Hello, World")
# x = 1
# y = 2
# unit_price = 3

# # # STRINGS
# # course = "Python Programming"

# # # A long message
# # message = """ Hey, you are proceeding how? Just checking on you. """

# course = "Python Programming"
# print(len(course))
# print(course[0])
# print(course[-1])
# print(course[0:3])
# print(course[0:])
# print(course[:3])
# print(course[:])

# # ESCAPE SEQUENCES
# # \"
# # \'
# # \\


# course = "Python \"Programming"
# print(course)


# FORMATTED STRINGS
# first = "Mosh"
# last = "Hamedani"
# full = f"{first} {last}"
# print(full)

# first = "Mosh"
# last = "Hamedani"
# full = "Mosh" + "  " + "Hamedani"
# print(full)

# first = "Mosh"
# last = "Hamedani"
# full = f"{first} {last}"
# print(full)

# first = "Mosh"
# last = "Hamedani"
# full = f"{len(first)} {2 + 2}"
# print(full)

# # STRING METHODS
# course = "  python programming"
# print(course.strip())
# print(course.rstrip())
# print(course.lstrip())
# print(course.upper())
# print(course.lower())
# print(course.title())
# print(course.find("Pro"))
# print(course.find("pro"))
# print(course.replace("p", "j"))
# print("pro" in course)
# print("swift" not in course)
# print(course)

# # NUMBERS
# # TYPES
# x = 1
# print(x)
# x = 1.1
# print(x)
# x = 1 + 2j
# print(x)

# print(10 + 3)
# print(10 - 3)
# print(10 * 3)
# print(10 / 3)
# print(10 // 3)
# print(10 % 3)
# print(10 ** 3)

# # AUGMENTED ASSIGMENT OPERATOR
# x = 10
# x = x + 3
# x += 3

# import math
# print(round(2.9))
# print(abs(-2.9))
# print(abs(2.9))

# print(math.ceil(2.2))
# print(math.floor(2.2))

# # TYPE CONVERSION
# x = input("x: ")
# y = int(x) + 1
# print(f"x: {x}, y: {y}")

# # CONVERTERS
# # int(x)
# # float(x)
# # bool(x)
# # str(x)

# # Falseys
# # "" # An empty string
# # null
# # 0
# # Anything else is truthy


# # NB Truthy and Falsey are not boolean true and false

# name = input("Name: ")
# print(f"Your Name is" + name)

# # DAY 19
# # VARIABLES
# students_count = 1000
# rating = 4.99
# is_published = True
# course_name = "Python Programming"

# # STRINGS
# course = "Python Programming"
# print(len(course))
# print(course[0])
# print(course[-1])
# print(course[0:3])
# print(course[0:])
# print(course[:3])
# print(course[:])

# # ESCAPE SEQUENCES
# course = "Python \"Programming"  # \" is an escape sequences
# print(course)
# course = "Python \'Programming"
# print(course)
# course = "Python \\Programming"
# print(course)
# course = "Python \nProgramming"
# print(course)

# fruit = "Apple"
# print(fruit[1:0])

# DAY 20
# CONTROL FLOW
# 1. COMPARISON OPERATORS
# > , < and =

# # CONDITIONAL STATEMENTS
# temperature = 15
# if temperature > 30:
#     print("It is warm")
# elif temperature > 20:
#     print("It is nice")
# else:
#     print("It is cold")
# print("Program End")

# TERNARY OPERATOR
# age = 22

# if age >= 18:
#     print("Eligible")
# else:
#     print("Not Eligible")

# age = 22
# if age >= 18:
#     message = "Eligible"
# else:
#     message = "Not Eligible"
# print(message)

# age = 22

# message = "Eligible" if age >= 18 else "Not Eligible"
# print(message)

# LOGICAL OPERATORS
# AND OPERATOR. ALL CONDITIONS FULFILLED
# high_income = True
# good_credit = True

# if high_income and good_credit:
#     print("Eligible")
# else:
#     print("Not Eligible")

# # OR OPERATORS. ATLEAST ONE CONDITION FULFILLED
# high_income = True
# good_credit = True

# if high_income or good_credit:
#     print("Eligible")
# else:
#     print("Not Eligible")

# # AND and OR OPERATORS
# high_income = True
# good_credit = True
# student = False

# if (high_income and good_credit) or not student:
#     print("Eligible")
# else:
#     print("Not Eligible")

# # NOT OPERATOR
# student = True

# if not student:
#     print("Eligible")
# else:
#     print("Not Eligible")

# # CHAINING COMPARISON OPERATORS
# age = 2
# if 18 <= age < 65:  # Age is between 18 and 65 # A chained comparison
#     # if age >= 18 and age < 65: # Without chaining
#     print("Eligible")
# else:
#     print("Not Eligible")

# LOOPS
# FOR LOOPS. REPEAT SOMETHING A NUMBER OF TIMES
# for number in range(3):
#     print("Attempt")

# for number in range(1, 10, 2):
#     print("Attempt", number, number * ".")

# # DAY 21
# # 2. LOOPS
# # FOR ELSE LOOP
# successful = True
# for number in range(3):
#     print("Attempt")
#     if successful:
#         print("Successful")
#         break
# else:
#     print("attempted but failed 3 times")

# # 3. NESTED LOOPS
# for x in range(5):
#     for y in range(3):
#         print(f"{x}, {y}")

# # 4. ITERABLES
# count = 0
# for number in range(1, 10):
#     if number % 2 == 0:
#         count += 1
#         print(number)
# print(f"We have {count} even numbers")


# FUNCTIONS
# DEFINING A FUNCTION
# def greet():
#     print("Hello World")
#     print("Welcome Aboard")


# greet()

# # ARGUMENTS
# def greet(first_name, last_name):
#     print(f"Hello {first_name} {last_name}")
#     print("Welcome Aboard")


# greet("Parel", "Gorgeous")
# greet("Houdini", "Hadani")

# # DAY 22
# # KEYWORD ARGUMENTS
# def increment(number, by):
#     return number + by


# print(increment(2, by=1))

# # *ARGS
# def multiply(*numbers):
#     total = 1
#     for number in numbers:
#         total *= number
#     return total


# print(multiply(2, 3, 4, 5))

# # **ARGS
# def save_user(**user):
#     print(user["name"])


# save_user(id=1, name='John', age=22)

# # DEBUGGING
# def multiply(*numbers):
#     total = 1
#     for number in numbers:
#         total *= number
#     return total


# print("Start")
# print(multiply(1, 2, 3))

# DAY 25
# from cs50 import get_string
