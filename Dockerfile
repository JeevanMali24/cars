from python:3
run pip install django==3.2

copy . .
run python manage.py migrate
expose 8000
cmd ["python","manage.py","runserver","0.0.0.0:8000"]
