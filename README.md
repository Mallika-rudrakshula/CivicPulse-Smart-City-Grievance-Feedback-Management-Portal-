# CivicPulse – Smart City Grievance & Feedback Management Portal

## Overview
CivicPulse is a web-based platform designed to streamline grievance and feedback management for smart cities. It enables citizens to submit complaints, track their progress, and provide feedback while allowing municipal authorities to manage, monitor, and resolve issues efficiently. The system emphasizes transparency, accountability, and timely resolution through role-based access and SLA monitoring.

## Problem Statement
Traditional municipal grievance systems often suffer from delays, lack of transparency, and ineffective tracking. CivicPulse addresses these challenges by providing a centralized digital solution for complaint registration, workflow management, and performance analytics, ensuring citizens’ concerns are heard and acted upon efficiently.

## Key Roles

### Citizen
- Register and login securely
- Submit grievances with details, images, and location
- Track the status of complaints
- Provide feedback after resolution

### Administrator
- View and manage all grievances
- Assign complaints to departments or officers
- Set priorities and deadlines
- Monitor SLA compliance and generate analytics reports

### Department Officer
- View assigned grievances
- Update progress and resolution status
- Add notes or attachments for resolved issues

## Core Modules

1. **Authentication & Authorization**
   - Secure JWT-based login
   - Role-based access control

2. **Grievance Submission**
   - Category-wise complaint creation
   - Upload images and location info
   - Track status (Pending, In Progress, Resolved)

3. **Grievance Management**
   - Centralized dashboard for complaints
   - Assignment to officers or departments
   - Set priorities and deadlines

4. **Officer Workflow**
   - Manage assigned grievances
   - Update progress and submit resolutions

5. **Feedback Management**
   - Citizen ratings post-resolution
   - Option to reopen unresolved issues

6. **Reporting & Analytics**
   - Category-wise complaint statistics
   - Area-wise complaint distribution
   - SLA compliance and performance dashboards

## Technology Stack

### Frontend
- React (Vite)
- REST API integration
- Data visualization with charts

### Backend
- Spring Boot
- Spring Security with JWT authentication
- RESTful services

### Database
- MySQL
- JPA / Hibernate

## Tools & Utilities
- STS (Spring Tool Suite)
- Maven
- Postman
- Git & GitHub
