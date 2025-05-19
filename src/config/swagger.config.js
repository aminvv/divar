const swaggerJsDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

function swaggerConfig(app){
    const swaggerDoc=swaggerJsDoc({
    definition:{
        info:{
            title:'divar',
            description:' botostart nodejs course',
            version:'0.0.1'
        }
    },
    apis:[]
})

const swagger=swaggerUi.setup(swaggerDoc,{})
app.use('/swagger',swaggerUi.serve,swagger)
}

module.exports=swaggerConfig