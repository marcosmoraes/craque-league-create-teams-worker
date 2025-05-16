# API Documentation

## Overview

The League Create Teams Worker is a serverless service that processes messages from an SQS queue to create and update teams in leagues. The API is built using AWS Lambda and Serverless Framework.

## Endpoints

### Statistics Processing

#### POST /process-statistics
Processes player statistics and updates teams.

**SQS Queue**: `processar-players-statistics-team`

**Payload**:
```json
{
    "playerId": "number",
    "teamId": "number",
    "leagueId": "number",
    "statistics": {
        "games": {
            "appearences": "number",
            "minutes": "number",
            "position": "string",
            "rating": "number"
        },
        "goals": {
            "total": "number",
            "assists": "number",
            "saves": "number"
        },
        "shots": {
            "total": "number",
            "on": "number"
        },
        "passes": {
            "total": "number",
            "key": "number",
            "accuracy": "number"
        },
        "tackles": {
            "total": "number",
            "blocks": "number",
            "interceptions": "number"
        },
        "duels": {
            "total": "number",
            "won": "number"
        },
        "dribbles": {
            "attempts": "number",
            "success": "number",
            "past": "number"
        },
        "fouls": {
            "drawn": "number",
            "committed": "number"
        },
        "cards": {
            "yellow": "number",
            "red": "number"
        },
        "penalty": {
            "won": "number",
            "committed": "number",
            "scored": "number",
            "missed": "number",
            "saved": "number"
        }
    }
}
```

**Response**:
```json
{
    "success": "boolean",
    "message": "string",
    "data": {
        "playerId": "number",
        "teamId": "number",
        "updatedAt": "string"
    }
}
```

**Status Codes**:
- 200: Success
- 400: Invalid data
- 500: Internal error

## Processing Flows

### 1. Message Reception
1. Message received from SQS queue
2. Payload validation
3. Data extraction
4. Statistics processing
5. Team update
6. Processing confirmation

### 2. Validations
1. Required data
2. Data types
3. Valid ranges
4. Data consistency
5. Referential integrity

### 3. Error Handling
1. Validation errors
2. Connection errors
3. Processing errors
4. Update errors
5. Automatic retry

## Usage Examples

### Send Statistics
```bash
aws sqs send-message \
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/processar-players-statistics-team \
    --message-body '{
        "playerId": 123,
        "teamId": 456,
        "leagueId": 789,
        "statistics": {
            "games": {
                "appearences": 10,
                "minutes": 900,
                "position": "Forward",
                "rating": 7.5
            }
        }
    }'
```

### Check Status
```bash
aws cloudwatch get-metric-statistics \
    --namespace AWS/Lambda \
    --metric-name Duration \
    --dimensions Name=FunctionName,Value=league-create-teams-worker \
    --start-time 2024-01-01T00:00:00 \
    --end-time 2024-01-02T00:00:00 \
    --period 3600 \
    --statistics Average
```

## Monitoring

### Metrics
1. Processing time
2. Success rate
3. Errors by type
4. Memory usage
5. Latency

### Logs
1. Execution logs
2. Error logs
3. Performance logs
4. Access logs
5. Audit logs

## Security

### Authentication
1. IAM roles
2. Access policies
3. Layered security
4. Data validation
5. Encryption

### Data
1. Input validation
2. Data sanitization
3. In-transit encryption
4. Automatic backup
5. Access audit 