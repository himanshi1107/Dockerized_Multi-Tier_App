# Dockerized Multi-Tier Application

Welcome to the Dockerized Multi-Tier Application! This project demonstrates a full-stack application with Docker, featuring a frontend, backend, and MySQL database running in separate containers. It’s designed to be scalable, portable, and easy to deploy on cloud platforms like AWS EC2.

# **🚀 Features**
1. 🖥️ Frontend: React + Redux for a responsive UI (Port 3000).
2. ⚙️ Backend: Spring Boot REST API (Port 8080).
3. 🗃️ Database: MySQL for data storage (Port 3306).
4. 🔧 Modular & Scalable: Each component runs in its own container, easy to scale and maintain.

# **🎨 Project Structure**
```
project-root/
├── backend/
│   ├── src/main/java/com/example/backend/BackendApplication.java  # Spring Boot app
│   ├── pom.xml  # Maven configuration
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   └── App.js  # React app
│   ├── package.json
│   └── Dockerfile
├── db/
│   └── Dockerfile
├── docker-compose.yml

 ```

# **🌍 Deployment on AWS EC2**
1. Launch an EC2 instance (Ubuntu-based).
2. SSH into the instance and install Docker & Docker Compose.
3. Clone the repo and start the containers
   
  ```
  git clone https://github.com/your-username/Dockerized_Multi-Tier_App.git
  cd Dockerized_Multi-Tier_App
  docker-compose up --build -d
  ```
# **📸 Project Screenshots**

![WhatsApp Image 2025-01-26 at 23 21 23_6cc4cb7d](https://github.com/user-attachments/assets/0aec5fe5-6623-4163-baad-8d3f7bcf5c88)

![WhatsApp Image 2025-01-26 at 23 20 29_0f4f6540](https://github.com/user-attachments/assets/5889c38b-3709-4556-9502-f4f18312e3fc)

![WhatsApp Image 2025-01-26 at 23 20 29_43fd542f](https://github.com/user-attachments/assets/b7fb3b49-af65-4db0-bdd9-7e3809ac8f93)


