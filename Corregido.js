const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "Ayuda";

const datasource = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "size": "large"
                }
            ]
        },
        "title": "AYUDA CURIOSIDADES BUENOS AIRES",
        "listItems": [
            {
                "primaryText": "PUEDES INTENTAR DECIR LAS SIGUIENTES FRASES:"
            },
            {
                "primaryText": "qué lugares turísticos hay en Buenos Aires"
            },
            {
                "primaryText": "cuéntame sobre Buenos Aires"
            },
            {
                "primaryText": "traje tradicional de Buenos Aires"
            },
            {
                "primaryText": "personajes famosos de Buenos Aires"
            },
            {
                "primaryText": "canciones típicas de Buenos Aires"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();




    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "Bienvenida";

const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Bienvenido a curiosidades de Buenos Aires - Argentina"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": "Puedes decir, \"Alexa, cuéntame sobre Buenos Aires\""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();




    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "CancelarSalir";

const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Hasta luego, regresa pronto!!"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": "Intenta decir, \"Alexa, terminar\""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();




    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "ComidaTipica";

const datasource = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-leaf-2.png",
            "headerTitle": "Comida tipica de buenos aires",
            "headerSubtitle": "",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "La gastronomia de Buenos Aires, Argentina destaca principalmente de...",
            "listItems": [
                {
                    "primaryText": "Asado",
                    "secondaryText": "Generalmente se sirve con chimichurri, ensaladas y papas.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.lOokX_uokKguokth06ZwTAHaEv?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "primaryText": "Empanadas",
                    "secondaryText": "Pueden ser fritas o al horno.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.SQXf27kFba6uTbX5tW3RnQHaD2?w=327&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "primaryText": "Milanesa",
                    "secondaryText": "Se sirve con papas fritas o puré de papas.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.9tx_lPKZzni9-jhmiSwqXgHaDO?w=298&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "primaryText": "Provoleta",
                    "secondaryText": "A menudo se sirve con pan fresco.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.yXxYCDBomHWftQ1FwtaSjgHaFc?w=250&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "primaryText": "Choripán",
                    "secondaryText": "Puede acompañarse con salsas y ensaladas.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.9p0NN8hpLqeHJgx2ad6PawHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                },
                {
                    "primaryText": "Pizza al estilo argentino",
                    "secondaryText": "La fugazzeta (pizza de cebolla y queso) es muy popular.",
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.v0T4hG5Kz5Q2ug1HxoZIwwHaFP?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
            ]
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();




    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "DescripcioVideo";

const datasource = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "displayFullscreen": false,
            "headerTitle": "Buenos Aires - Argentina",
            "headerSubtitle": "Curiosidades",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "videoControlType": "jump30",
            "videoSources": [
                "https://pruebamabel.s3.us-east-2.amazonaws.com/WhatsApp+Video+2024-07-03+at+5.19.29+PM.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();



    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "Error";

const datasource = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Algo salió mal !! <br>  comencemos de nuevo, intenta decir: inicia curiosidades buenos aires"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
            "hintText": "Intenta decir, \"Alexa, inicia curiosidades buenos aires\""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();



    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "LugaresTuristicos";

const datasource = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://th.bing.com/th/id/OIP.rJVRLgc4EKTw_Abvl5BgGAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "size": "large"
                }
            ]
        },
        "title": "Lugares turisticos de Buenos Aires",
        "listItems": [
            {
                "primaryText": "La Casa Rosada",
                "imageSource": "https://th.bing.com/th/id/OIP.iC6fFDipjbzOjD53RLMSwAHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Obelisco",
                "imageSource": "https://th.bing.com/th/id/OIP.eNZBW_DbKNrrPAIuPWA0-wHaFi?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Teatro Colón",
                "imageSource": "https://th.bing.com/th/id/OIP.mf3aCrVvbV7-eqfLaZcY8wHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Recoleta",
                "imageSource": "https://th.bing.com/th/id/OIP.7W7Yoqy51PxdHz_XX00tLwHaFE?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Caminito",
                "imageSource": "https://th.bing.com/th/id/OIP.8mlyfL4YhGWRG6lXyqicSwHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Puerto Madero",
                "imageSource": "https://th.bing.com/th/id/OIP.MGcCJF6yP2JpSaVUJtW-OAHaFj?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Intenta decir, \"Alexa, lugares para visitar en Buenos Aires\""
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();



    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "PersonajesSobresalientes";

const datasource = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://th.bing.com/th/id/OIP.9xEcQq0xfpt--bBZ0TO2uQHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "size": "large"
                }
            ]
        },
        "title": "Personajes sobresalientes",
        "listItems": [
            {
                "primaryText": "Carlos Gardel",
                "imageSource": "https://th.bing.com/th/id/OIP.9upOdegv9Lzo8aEqmAM_0wHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Eva Perón",
                "imageSource": "https://th.bing.com/th/id/OIP.1KM0rMPvtOC6P_xARbxZkwHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Jorge Luis Borges",
                "imageSource": "https://th.bing.com/th?q=Imagen+De+Jorge+Luis+Borges&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247"
            },
            {
                "primaryText": "Astor Piazzolla",
                "imageSource": "https://th.bing.com/th/id/OIP.Re2YombNnq1lu1HcUPDYKAHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Intenta decir, \"Alexa, personajes famosos de Buenos Aires\""
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();



    const Alexa = require("ask-sdk-core");

const DOCUMENT_ID = "SoundArgentina";

const datasource = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://pruebamabel.s3.us-east-2.amazonaws.com/WhatsApp+Audio+2024-07-03+at+5.17.14+PM.mpeg"
            ],
            "backgroundImage": "https://th.bing.com/th/id/OIP.QckGH0GEsP1CagQcS27C0AHaEo?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "coverImageSource": "https://th.bing.com/th/id/OIP.rrq_fUpow0Mb8iITnfqdHAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "headerTitle": "Buenos Aires",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Por una cabeza",
            "secondaryText": "Carlos Gardel",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const SampleAPLRequestHandler = {
    canHandle(handlerInput) {
        // handle named intent
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'INTENT_NAME';
    },
    handle(handlerInput) {
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            // generate the APL RenderDocument directive that will be returned from your skill
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            // add the RenderDocument directive to the responseBuilder
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        // send out skill response
        return handlerInput.responseBuilder.getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(SampleAPLRequestHandler)
    .lambda();