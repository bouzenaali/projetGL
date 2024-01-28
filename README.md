# DZ MOUHAMI
⚖️ this is the backend of the dz-mouhami application

## Getting Started
### Installation
1. Clone the repo
```bash
git clone https://github.com/bouzenaali/projetGL.git
```

2. Navigate to the project directory
```bash
cd Backend
``` 

3. Build the Docker image:
```bash
docker build -t my-django-app .
```
4. Run the Docker container:
```bash
docker run -p 8000:8000 my-django-app
```
5. Run the Django migrations:
```bash
docker exec -it <container id> python manage.py migrate
```

## Usage

Once the Docker container is running, you can access the Django application at `http://localhost:8000`.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
