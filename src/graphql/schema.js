const typeDefs = `#graphql
  type User {
    id: ID!
    nome: String!
    email: String!
    perfil: String!
  }

  type Vehicle {
    id: ID!
    placa: String!
    modelo: String!
    ano: Int!
    capacidadeKg: Float!
    status: String!
    maintenances: [Maintenance]
    deliveries: [Delivery]
  }

  type Maintenance {
    id: ID!
    descricao: String!
    tipo: String!
    custo: Float
    createdAt: String
  }

  type Delivery {
    id: ID!
    codigoRastreio: String!
    origem: String!
    destino: String!
    status: String!
    motorista: User
  }

  type Query {
    dashboardGestor: [Vehicle]
  }
`;

module.exports = typeDefs;
