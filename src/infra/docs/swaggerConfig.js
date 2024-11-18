const swaggerOptions = {
  swaggerDefinition: {
    ["node-curriculum"]: '1.0.0',
    info: {
      title: 'Node Curriculum',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['../../api/*.js', '../../api/controllers/*.js'], // files containing annotations as above
};

export { swaggerOptions };