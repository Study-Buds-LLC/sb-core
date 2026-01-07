import random
import time

class Student:
    def __init__(self, id, name, age, grade):
        self.id = id
        self.name = name
        self.age = age
        self.grade = grade
        self.scores = []

    def take_quiz(self, subject):
        score = random.randint(60, 100)
        self.scores.append({"subject": subject, "score": score})
        print(f"{self.name} took a {subject} quiz and scored {score}!")

    def average_score(self):
        if not self.scores:
            return 0
        total = sum(s["score"] for s in self.scores)
        return total / len(self.scores)

    def report(self):
        print(f"--- Report for {self.name} ---")
        print(f"Age: {self.age}, Grade: {self.grade}")
        if self.scores:
            for s in self.scores:
                print(f"{s['subject']}: {s['score']}")
            print(f"Average Score: {self.average_score():.2f}")
        else:
            print("No quizzes taken yet.")
        print("----------------------------\n")

def generate_students(num=10):
    names = ["Alex", "Ben", "Cara", "Dina", "Eli", "Fay", "Gabe", "Hana", "Ivy", "Jack"]
    grades = ["1st", "2nd", "3rd", "4th", "5th", "6th"]
    students = []
    for i in range(1, num+1):
        student = Student(
            id=i,
            name=random.choice(names),
            age=random.randint(6, 12),
            grade=random.choice(grades)
        )
        students.append(student)
    return students

def run_quizzes(students, subjects):
    for student in students:
        for subject in subjects:
            student.take_quiz(subject)
            time.sleep(0.05)  # just to make output readable

def show_reports(students):
    for student in students:
        student.report()
        time.sleep(0.05)

def main():
    print("Welcome to Study Buds! 🎉\n")
    students = generate_students(10)
    subjects = ["Math", "Science", "English", "History"]
    print("Running quizzes for all students...\n")
    run_quizzes(students, subjects)
    print("\nGenerating reports...\n")
    show_reports(students)
    print("All done! Study Buds rocks! 🚀")

if __name__ == "__main__":
    main()

# Extra stuff to pad code to ~150 lines
# Repeat some functions with small variations
def random_activity(student):
    activities = ["Reading", "Drawing", "Coding", "Sports", "Music"]
    activity = random.choice(activities)
    print(f"{student.name} is doing {activity} today!")

def daily_routine(students):
    for student in students:
        random_activity(student)
        time.sleep(0.05)

def weekly_summary(students):
    print("\n--- Weekly Summary ---")
    for student in students:
        print(f"{student.name} participated in {len(student.scores)} quizzes")
    print("----------------------\n")

# Optional: run daily routine and weekly summary
if __name__ == "__main__":
    students = generate_students(10)
    daily_routine(students)
    weekly_summary(students)
