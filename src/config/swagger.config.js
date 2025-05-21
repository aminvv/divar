const swaggerJsDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

function swaggerConfig(app){
    const swaggerDoc=swaggerJsDoc({
    definition:{
        openapi: '3.0.0',
        info:{
            title:'divar',
            description:' botostart nodejs course',
            version:'0.0.1'
        }
    },
    apis:[process.cwd()+ '/src/modules/**/*.swagger.js']
})

const swagger=swaggerUi.setup(swaggerDoc,{})
app.use('/swagger',swaggerUi.serve,swagger)
}

module.exports=swaggerConfig