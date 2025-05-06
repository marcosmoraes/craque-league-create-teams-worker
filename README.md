# League Create Teams Worker

Este é um worker serverless responsável por processar estatísticas de jogadores e criar times em uma liga. O serviço é construído usando AWS Lambda e processa mensagens de uma fila SQS.

## 🚀 Tecnologias Utilizadas

- **Node.js** (v18.x)
- **Serverless Framework** - Para deploy e gerenciamento da infraestrutura
- **AWS Lambda** - Para execução serverless
- **AWS SQS** - Para processamento de mensagens em fila
- **MongoDB** - Banco de dados para armazenamento dos dados
- **Express** - Framework web para desenvolvimento local
- **Axios** - Cliente HTTP para requisições
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Serverless Framework CLI instalado globalmente
- Conta AWS configurada
- MongoDB configurado

## 🔧 Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
MONGODB_USERNAME=seu_usuario
MONGODB_PASSWORD=sua_senha
DATABASE=nome_do_banco
```

## 🏗️ Estrutura do Projeto

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

## 🚀 Executando Localmente

Para executar o projeto localmente:

```bash
serverless offline
```

O serviço estará disponível em `http://localhost:3002`

## 📦 Deploy

Para fazer deploy do serviço:

```bash
serverless deploy
```

## 🔄 Fluxo de Processamento

1. O worker recebe mensagens da fila SQS `processar-players-statistics-team`
2. Para cada mensagem recebida:
   - Conecta ao MongoDB
   - Processa as estatísticas do jogador
   - Atualiza os dados no banco
3. Fecha a conexão com o banco de dados
4. Retorna status de sucesso ou erro

## ⚙️ Configuração do Serverless

O arquivo `serverless.yml` configura:
- Runtime: Node.js 18.x
- Timeout: 600 segundos
- Eventos SQS
- Plugins para desenvolvimento local

## 🔍 Monitoramento

O serviço registra logs no CloudWatch da AWS, incluindo:
- Erros de processamento
- Status de execução
- Tempo de processamento

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.
