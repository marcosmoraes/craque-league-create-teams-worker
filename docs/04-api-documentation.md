# Documentação da API

## Visão Geral

O League Create Teams Worker é um serviço serverless que processa mensagens de uma fila SQS para criar e atualizar times em ligas. A API é construída usando AWS Lambda e Serverless Framework.

## Endpoints

### Processamento de Estatísticas

#### POST /process-statistics
Processa estatísticas de jogadores e atualiza times.

**Fila SQS**: `processar-players-statistics-team`

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

**Resposta**:
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

**Códigos de Status**:
- 200: Sucesso
- 400: Dados inválidos
- 500: Erro interno

## Fluxos de Processamento

### 1. Recebimento de Mensagem
1. Mensagem recebida da fila SQS
2. Validação do payload
3. Extração dos dados
4. Processamento das estatísticas
5. Atualização do time
6. Confirmação do processamento

### 2. Validações
1. Dados obrigatórios
2. Tipos de dados
3. Ranges válidos
4. Consistência dos dados
5. Integridade referencial

### 3. Tratamento de Erros
1. Erros de validação
2. Erros de conexão
3. Erros de processamento
4. Erros de atualização
5. Retry automático

## Exemplos de Uso

### Enviar Estatísticas
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

### Verificar Status
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

## Monitoramento

### Métricas
1. Tempo de processamento
2. Taxa de sucesso
3. Erros por tipo
4. Uso de memória
5. Latência

### Logs
1. Logs de execução
2. Logs de erro
3. Logs de performance
4. Logs de acesso
5. Logs de auditoria

## Segurança

### Autenticação
1. IAM roles
2. Políticas de acesso
3. Segurança em camadas
4. Validação de dados
5. Criptografia

### Dados
1. Validação de entrada
2. Sanitização de dados
3. Criptografia em trânsito
4. Backup automático
5. Auditoria de acesso 