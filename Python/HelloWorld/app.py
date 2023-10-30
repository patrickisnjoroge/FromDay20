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

# # DAY 28
# # MODULES
# # CREATING MODULES
# import sales
# from sales import calc_shipping, calc_tax

# sales.calc_shipping()

# calc_shipping()
# calc_tax()

# # COMPILED PYTHON FILES
# import sales
# import sys

# print(sys.path)

# # PACKAGES
# from ecommerce.sales import calc_tax
# from ecommerce import sales

# sales.calc_shipping()
# sales.calc_tax()

# # SUB-PACKAGES
# from ecommerce.shopping import sales

# # THE DIR() FUNCTION
# from ecommerce.shopping import sales


# # print(dir(sales))
# print(sales.__name__)
# print(sales.__package__)
# print(sales.__file__)

# # EXECUTING MODULES AS SCRIPTS
# from ecommerce.shopping import sales

# # PYTHON STANDARD LIBRARY
# # WORKING WITH PATHS

# from pathlib import Path

# # path = Path(r"C:\Program Files\Microsoft")
# path = Path(
#     r"C:\Users\user\Desktop\Coding\FromDay20\Python\HelloWorld\ecommerce\__init__.py")
# path.exists()
# path.is_file()
# path.is_dir()
# print(path.name)
# print(path.stem)
# print(path.suffix)
# print(path.parent)
# path = path.with_suffix(".txt")
# print(path.absolute())

# # DAY 29
# # WORKING WITH SQLITE
# import sqlite3
# import json
# from pathlib import Path

# # movies = json.loads(Path("movies.json").read_text())

# with sqlite3.connect("db.sqlite") as conn:
#     # command = "INSERT INTO Movies VALUES(?, ?, ?)"
#     command = "SELECT * FROM Movies"
#     cursor = conn.execute(command)
#     # for row in cursor:
#     #     print(row)
#     # for movie in movies:
#     #     conn.execute(command, tuple(movie.values()))
#     # conn.commit()
#     movies = cursor.fetchall()
#     print(movies)

# # DAY 29
# # WORKING WITH TIMESTAMPS
# import time


# def send_emails():
#     for i in range(10000):
#         pass


# start = time.time()
# send_emails()
# end = time.time()
# duration = end - start
# print(duration)

# # # DAY 29
# # # WORKING WITH TIMESTAMPS
# # import time


# # def send_emails():
# #     for i in range(10000):
# #         pass


# # start = time.time()
# # send_emails()
# # end = time.time()
# # duration = end - start
# # print(duration)

# # # DATETIME OBJECTS
# # from datetime import datetime
# # import time


# # dt1 = datetime(2018, 1, 1)
# # dt2 = datetime.now()
# # dt = datetime.strptime("2018/01/01", "%Y/%m/%d")
# # dt = datetime.fromtimestamp(time.time())

# # print(f"{dt.year}/{dt.month}")
# # print(dt.strftime("%Y/%m"))

# print(dt2 > dt1)

# # WORKING WITH TIME DELTAS
# from datetime import datetime, timedelta

# dt1 = datetime(2018, 1, 1) + timedelta(days=1, seconds=1000)
# print(dt1)
# dt2 = datetime.now()

# duration = dt2 - dt1
# print(duration)
# print("days", duration.days)
# print("seconds", duration.seconds)
# print("total_seconds", duration.total_seconds())

# # GENERATING RANDOM VALUES
# import random
# import string

# print(random.random())
# print(random.randint(1, 10))
# print(random.choice([1, 2, 3, 4]))
# print(random.choices([1, 2, 3, 4], k=2))
# print("".join(random.choices(string.ascii_letters + string.digits, k=4)))

# numbers = [1, 2, 3, 4]
# random.shuffle(numbers)
# print(random)

# # OPENING THE BROWSER
# import webbrowser

# print("Deployment completed")
# webbrowser.open("http://google.com")

# from email.mine.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# import smtplib

# message = MIMEMultipart()
# message["from"] = "Mosh Hamedani"
# message["to"] = "testuser@codewithmosh.com"
# message["subject"] = "This is a test"
# message.attach(MIMEText("Body"))

# smtp = smtplib.SMTP(host="smtp.gmail.com", port=587) as smtp:
#   smtp.ehlo()
#   smtp.starttls()
#   smtp.login("testuser@codewithmosh.com", "todayskyisblue")
#   smtp.send_message(message)
#   print("Sent...")

# # WORKING WITH TEMPLATES
# import requests

# response = requests.get("http://google.com")
# print(response)

# DAY 30
# PIPFILE
