# Componentes do Sistema

## Modelos de Dados

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

## Serviços

### TeamService (service/team-service.js)
- `createTeam(teamData)`: Cria um novo time
- `updateTeam(teamId, teamData)`: Atualiza dados do time
- `getTeamById(teamId)`: Busca time por ID
- `processPlayerStatistics(playerId, statistics)`: Processa estatísticas do jogador

### PlayerService (service/player-service.js)
- `getPlayerStatistics(playerId)`: Obtém estatísticas do jogador
- `updatePlayerStatistics(playerId, statistics)`: Atualiza estatísticas
- `calculatePlayerRating(statistics)`: Calcula rating do jogador

### DataAccess (repositories/mongodb.js)
- `connectToDatabase(username, password, database)`: Conecta ao MongoDB
- `findTeamById(teamId)`: Busca time por ID
- `updateTeam(teamId, teamData)`: Atualiza time
- `findPlayerById(playerId)`: Busca jogador por ID
- `updatePlayerStatistics(playerId, statistics)`: Atualiza estatísticas

## Data Access

### MongoDB
- Conexão configurada com credenciais do ambiente
- Coleções:
  - `teams`: Dados dos times
  - `player_statistics`: Estatísticas dos jogadores
  - `leagues`: Informações das ligas
- Índices:
  - `teams.id`: Índice único
  - `player_statistics.playerId`: Índice para busca rápida
  - `leagues.id`: Índice único

## Fluxos de Processamento

### Processamento de Estatísticas
1. Recebe mensagem da fila SQS
2. Extrai dados do jogador e estatísticas
3. Valida dados recebidos
4. Processa estatísticas:
   - Calcula rating
   - Atualiza médias
   - Processa tendências
5. Atualiza time:
   - Atualiza estatísticas do jogador
   - Recalcula médias do time
   - Atualiza ranking
6. Confirma processamento

### Tratamento de Erros
- Validação de dados de entrada
- Tratamento de erros de conexão
- Retry em falhas temporárias
- Logs detalhados de erros
- Notificação de falhas críticas

### Validações
- Dados obrigatórios
- Formato dos dados
- Limites e ranges
- Consistência dos dados
- Integridade referencial 