# Visão Geral do Projeto

## Propósito
O League Create Teams Worker é um serviço serverless responsável por processar estatísticas de jogadores e criar times em uma liga. O serviço opera como um worker que processa mensagens de uma fila SQS, garantindo processamento assíncrono e escalável das operações.

## Tecnologias Principais
- **Node.js** (v18.x)
- **Serverless Framework**
- **AWS Lambda**
- **AWS SQS**
- **MongoDB**
- **Express** (desenvolvimento local)
- **Axios**
- **Dotenv**

## Estrutura do Projeto
```
├── config/             # Configurações do projeto
├── infraestructure/    # Configurações de infraestrutura
├── model/             # Modelos de dados
├── repositories/      # Camada de acesso a dados
├── service/          # Serviços de negócio
├── use-cases/        # Casos de uso da aplicação
├── utils/            # Utilitários
├── handler.js        # Ponto de entrada do Lambda
└── serverless.yml    # Configuração do Serverless Framework
```

## Funcionalidades Principais
1. Processamento assíncrono de estatísticas de jogadores
2. Criação e atualização de times em ligas
3. Integração com MongoDB para persistência de dados
4. Processamento de mensagens via SQS
5. Logs detalhados para monitoramento

## Ambiente de Desenvolvimento
- Node.js 18.x ou superior
- Serverless Framework CLI
- Conta AWS configurada
- MongoDB configurado

## Configuração
O projeto utiliza variáveis de ambiente para configuração:
- MONGODB_USERNAME
- MONGODB_PASSWORD
- DATABASE

## Execução Local
```bash
serverless offline
```
O serviço estará disponível em `http://localhost:3002`

## Deploy
```bash
serverless deploy
```

## Monitoramento
- Logs no CloudWatch
- Métricas de execução
- Status de processamento
- Tempo de execução 