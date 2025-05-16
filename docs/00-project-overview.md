# Project Overview

## Purpose
The League Create Teams Worker is a serverless service responsible for processing player statistics and creating teams in a league. The service operates as a worker that processes messages from an SQS queue, ensuring asynchronous and scalable operations.

## Main Technologies
- **Node.js** (v18.x)
- **Serverless Framework**
- **AWS Lambda**
- **AWS SQS**
- **MongoDB**
- **Express** (local development)
- **Axios**
- **Dotenv**

## Project Structure
```
├── config/             # Project configurations
├── infraestructure/    # Infrastructure settings
├── model/             # Data models
├── repositories/      # Data access layer
├── service/          # Business services
├── use-cases/        # Application use cases
├── utils/            # Utilities
├── handler.js        # Lambda entry point
└── serverless.yml    # Serverless Framework configuration
```

## Main Features
1. Asynchronous processing of player statistics
2. Creation and updating of teams in leagues
3. MongoDB integration for data persistence
4. SQS message processing
5. Detailed monitoring logs

## Development Environment
- Node.js 18.x or higher
- Serverless Framework CLI
- Configured AWS account
- Configured MongoDB

## Configuration
The project uses environment variables for configuration:
- MONGODB_USERNAME
- MONGODB_PASSWORD
- DATABASE

## Local Execution
```bash
serverless offline
```
The service will be available at `http://localhost:3002`

## Deployment
```bash
serverless deploy
```

## Monitoring
- CloudWatch logs
- Execution metrics
- Processing status
- Execution time 