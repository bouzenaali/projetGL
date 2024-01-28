# Use an official Python runtime as a parent image
FROM python:3.10-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project
COPY . /code/

# Collect static files
RUN python manage.py collectstatic --noinput

# Add and run as non-root user for security
RUN adduser --disabled-password --gecos '' myuser
USER myuser

# Expose the port the app runs in
EXPOSE 8000

# Define the command to run your app using CMD which defines your runtime
CMD ["gunicorn", "-b", ":8000", "project.wsgi:application"]