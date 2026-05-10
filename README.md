# AWS Cloud Capstone Project

## Project Overview

AWS Cloud Task Manager is a full-stack cloud-native web application deployed on AWS infrastructure using Terraform and Docker.

The application allows users to:
- Add tasks
- Store tasks in MySQL RDS
- Retrieve tasks dynamically from the database

The project demonstrates:
- Infrastructure as Code (IaC)
- Containerization
- CI/CD automation
- AWS cloud deployment
- Load balancing
- Cloud monitoring
- Security architecture

---

# Technologies Used

## Frontend
- React.js

## Backend
- Node.js
- Express.js

## Database
- Amazon RDS MySQL

## Cloud Services
- Amazon EC2
- Application Load Balancer (ALB)
- Amazon VPC
- Security Groups
- CloudWatch

## DevOps Tools
- Terraform
- Docker
- GitHub Actions
- Checkov

---

# Project Architecture

User → ALB → Frontend EC2 → Backend EC2 → RDS MySQL

Infrastructure includes:
- Custom VPC
- Public and Private Subnets
- Internet Gateway
- NAT Gateway
- Security Groups
- Application Load Balancer
- EC2 Instances
- RDS Database

---

# Folder Structure

```bash
aws-cloud-capstone/
│
├── frontend/
├── backend/
├── terraform/
├── .github/workflows/
└── README.md
````

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/vennela670/aws-cloud-capstone.git
cd aws-cloud-capstone
```

---

# Terraform Deployment

## Initialize Terraform

```bash
cd terraform
terraform init
```

## Validate Terraform

```bash
terraform validate
```

## Deploy Infrastructure

```bash
terraform apply
```

---

# Backend Deployment

## Build Docker Image

```bash
cd backend
sudo docker build -t backend-app .
```

## Run Backend Container

```bash
sudo docker run -d -p 5000:5000 --env-file .env backend-app
```

---

# Frontend Deployment

## Build Frontend Docker Image

```bash
cd frontend
sudo docker build -t frontend-app .
```

## Run Frontend Container

```bash
sudo docker run -d -p 80:80 frontend-app
```

---

# CI/CD Pipeline

GitHub Actions pipeline automates:

* Terraform formatting
* Terraform validation
* Docker build process

Workflow file:

```bash
.github/workflows/deploy.yml
```

---

# Policy as Code

Checkov was used for Terraform security scanning.

## Run Checkov

```bash
checkov -d terraform/
```

---

# Monitoring

CloudWatch detailed monitoring enabled for:

* Frontend EC2
* Backend EC2

Metrics monitored:

* CPU Utilization
* Network In/Out
* Packets
* Credit Usage

---

# Application Features

* Add Tasks
* View Tasks
* Persistent Database Storage
* Load Balanced Access
* Dockerized Deployment
* CI/CD Automation

---

# Live Application

Application URL:

[http://capstone-alb-342553999.ap-south-1.elb.amazonaws.com](http://capstone-alb-342553999.ap-south-1.elb.amazonaws.com)

---

# Screenshots Included

* GitHub Actions Success
* EC2 Instances
* Application Load Balancer
* RDS Database
* Docker Containers
* Terraform Apply
* Live Application
* MySQL Database Queries
* CloudWatch Monitoring
* Architecture Diagrams

---

# Architecture Diagrams

## Network Architecture

Shows:

* VPC
* Subnets
* NAT Gateway
* ALB
* EC2
* RDS

## Security Architecture

Shows:

* Security Groups
* Allowed Ports
* Database Security

## Application Architecture

Shows:

* Request Flow
* API Communication
* Database Queries

---

# Database Verification

```sql
USE taskdb;

SELECT * FROM tasks;
```

---

# GitHub Repository

[https://github.com/vennela670/aws-cloud-capstone](https://github.com/vennela670/aws-cloud-capstone)

---

# Future Improvements

* HTTPS with ACM
* Auto Scaling
* ECS/EKS deployment
* Centralized logging
* WAF integration

---

# Cleanup

To avoid AWS billing after evaluation:


terraform destroy


---

# Author

Vennela Yakari
AWS Cloud Capstone Project

