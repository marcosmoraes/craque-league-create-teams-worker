# System Components

## Data Models

### Team
```typescript
interface Team {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    venue: {
        id: number;
        name: string;
        address: string;
        city: string;
        capacity: number;
        surface: string;
        image: string;
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
    };
    players: Player[];
}

interface Player {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
    statistics: PlayerStatistics;
}

interface PlayerStatistics {
    games: {
        appearences: number;
        minutes: number;
        position: string;
        rating: number;
    };
    goals: {
        total: number;
        assists: number;
        saves: number;
    };
    shots: {
        total: number;
        on: number;
    };
    passes: {
        total: number;
        key: number;
        accuracy: number;
    };
    tackles: {
        total: number;
        blocks: number;
        interceptions: number;
    };
    duels: {
        total: number;
        won: number;
    };
    dribbles: {
        attempts: number;
        success: number;
        past: number;
    };
    fouls: {
        drawn: number;
        committed: number;
    };
    cards: {
        yellow: number;
        red: number;
    };
    penalty: {
        won: number;
        committed: number;
        scored: number;
        missed: number;
        saved: number;
    };
}
```

## Services

### TeamService (service/team-service.js)
- `createTeam(teamData)`: Creates a new team
- `updateTeam(teamId, teamData)`: Updates team data
- `getTeamById(teamId)`: Retrieves team by ID
- `processPlayerStatistics(playerId, statistics)`: Processes player statistics

### PlayerService (service/player-service.js)
- `getPlayerStatistics(playerId)`: Gets player statistics
- `updatePlayerStatistics(playerId, statistics)`: Updates statistics
- `calculatePlayerRating(statistics)`: Calculates player rating

### DataAccess (repositories/mongodb.js)
- `connectToDatabase(username, password, database)`: Connects to MongoDB
- `findTeamById(teamId)`: Finds team by ID
- `updateTeam(teamId, teamData)`: Updates team
- `findPlayerById(playerId)`: Finds player by ID
- `updatePlayerStatistics(playerId, statistics)`: Updates statistics

## Data Access

### MongoDB
- Connection configured with environment credentials
- Collections:
  - `teams`: Team data
  - `player_statistics`: Player statistics
  - `leagues`: League information
- Indexes:
  - `teams.id`: Unique index
  - `player_statistics.playerId`: Fast lookup index
  - `leagues.id`: Unique index

## Processing Flows

### Statistics Processing
1. Receive message from SQS queue
2. Extract player data and statistics
3. Validate received data
4. Process statistics:
   - Calculate rating
   - Update averages
   - Process trends
5. Update team:
   - Update player statistics
   - Recalculate team averages
   - Update ranking
6. Confirm processing

### Error Handling
- Input data validation
- Connection error handling
- Retry on temporary failures
- Detailed error logs
- Critical failure notifications

### Validations
- Required data
- Data format
- Limits and ranges
- Data consistency
- Referential integrity 