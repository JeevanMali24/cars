From python:3
RUN pip install django==3.2

copy . .
run python manage.py migrate
expose 8000
CMD ["python","manage.py","runserver","0.0.0.0:8000"]
