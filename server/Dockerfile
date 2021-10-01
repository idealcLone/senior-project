FROM python:3
RUN pip install --upgrade pip
WORKDIR /code
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
#CMD ["python3", "manage.py", "makemigrations",
#    "python3", "manage.py", "migrate",
#    "python3", "manage.py", "runserver", "0.0.0.0:8000"
#]
#CMD ["python3", "manage.py", "migrate"]
#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
#ADD init.sh /
#RUN chmod +x /init.sh
#RUN ./init.sh
#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
