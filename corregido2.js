const Alexa = require('ask-sdk-core');

const DOCUMENT_ID_DESCRIPCION = "DescripcionBuenosAires";
const DOCUMENT_ID_BIENVENIDA = "Bienvenida";
const DOCUMENT_ID_LUGARES_TURISTICOS = "LugaresTuristicos";
const DOCUMENT_ID_COMIDA_TIPICA = "ComidaTipica";
const DOCUMENT_ID_TRAJE_TIPICO = "TrajeTipico";
const DOCUMENT_ID_PERSONAJES_DESTACADOS = "PersonajesDestacados";
const DOCUMENT_ID_MUSICA = "Musica";
const DOCUMENT_ID_ERROR = "Error";
const DOCUMENT_ID_CERRAR = "Cerrar";
const DOCUMENT_ID_AYUDA = "Ayuda";

const datasourceAyuda = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
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
        "title": "AYUDA",
        "listItems": [
            {
                "primaryText": "\"Háblame de Buenos Aires\"",
                "imageSource": "https://th.bing.com/th/id/OIP.eNZBW_DbKNrrPAIuPWA0-wHaFi?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "\"Lugares turísticos de Buenos Aires\"",
                "imageSource": "https://th.bing.com/th/id/OIP.iC6fFDipjbzOjD53RLMSwAHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "\"Comida típica de Buenos Aires\"",
                "imageSource": "https://th.bing.com/th/id/OIP.lOokX_uokKguokth06ZwTAHaEv?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "\"Traje típico de Buenos Aires\"",
                "imageSource": "https://th.bing.com/th/id/OIP.nRHA9Hg_HH0ZwxZLXh6sqwHaEq?w=299&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "\"Personajes destacados de Buenos Aires\"",
                "imageSource": "https://th.bing.com/th/id/OIP.9upOdegv9Lzo8aEqmAM_0wHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "\"Escuchar música de Buenos Aires\"",
                "imageSource": "https://i.ytimg.com/vi/sq5AlBkpw6E/maxresdefault.jpg"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
        "hintText": "Di, \"Alexa, ayuda\""
    }
};

const datasourceBienvenida = {
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
                    "text": "Bienvenida a Buenos Aires. ¿Cómo puedo ayudarte hoy?"
                }
            },
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "hintText": "Di, \"Alexa, hablame de Buenos Aires\""
        }
    }
};

const datasourceDescripcion = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "displayFullscreen": false,
            "headerTitle": "Bienvenido a Buenos Aires",
            "headerSubtitle": "Descripción - Video",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "videoControlType": "skip",
            "videoSources": [
                "https://pruebamabel.s3.us-east-2.amazonaws.com/WhatsApp+Video+2024-07-03+at+5.19.29+PM.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const datasourceLugaresTuristicos = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://th.bing.com/th/id/OIP.ooNdzUkZlJv8wUtINckC9AHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "headerTitle": "Argentina",
            "headerSubtitle": "Buenos Aires",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Lugares Turísticos de Buenos Aires",
            "listItems": [
                {
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.iC6fFDipjbzOjD53RLMSwAHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "secondaryText": "La Casa Rosada"
                },
                {
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.eNZBW_DbKNrrPAIuPWA0-wHaFi?w=244&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "secondaryText": "Obelisco"
                },
                {
                    "thumbnailImage": "https://th.bing.com/th/id/OIP.mf3aCrVvbV7-eqfLaZcY8wHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "secondaryText": "Teatro Colón"
                }
            ]
        }
    }
};

const datasourceComidaTipica = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "URL_IMAGEN_FONDO_COMIDA",
            "headerTitle": "Comida Típica de Buenos Aires",
            "headerSubtitle": "Descubre los sabores de la ciudad",
            "headerAttributionImage": "URL_IMAGEN_ATRIBUCION_COMIDA",
            "primaryText": "Platos típicos",
            "listItems": [
                {
                    "thumbnailImage": "URL_IMAGEN_EMPANADAS",
                    "secondaryText": "Empanadas"
                },
                {
                    "thumbnailImage": "URL_IMAGEN_ASADO",
                    "secondaryText": "Asado"
                },
                {
                    "thumbnailImage": "URL_IMAGEN_ALFAJORES",
                    "secondaryText": "Alfajores"
                }
            ]
        }
    }
};

const datasourceTrajeTipico = {
    "detailImageRightData": {
        "type": "object",
        "objectId": "detailImageRightSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://th.bing.com/th/id/OIP.aCq3we3vUnCX6ZFL2TMfggHaE7?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                    "size": "large"
                }
            ]
        },
        "title": "Traje tipico",
        "subtitle": "Buenos Aires",
        "image": {
            "contentDescription": "",
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                        {
                            "url": "https://th.bing.com/th/id/OIP.nRHA9Hg_HH0ZwxZLXh6sqwHaEq?w=299&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                            "size": "large"
                        }
                    ]
        },
        "textContent": {
            "primaryText": {
                "type": "PlainText",
                "text": "Traje de tango"
            },
            "rating": {
                "text": ""
            },
            "locationText": {
                "type": "PlainText",
                "text": ""
            },
            "secondaryText": {
                "type": "PlainText",
                "text": "El traje de tango para hombres incluye pantalones oscuros, una camisa, chaqueta, corbata o moño, y sombrero tipo fedora, reflejando elegancia y estilo. Para mujeres, consiste en un vestido ajustado de seda o encaje, con aberturas para facilitar el baile, y zapatos de tacón alto, adornado con detalles como flecos y lentejuelas, destacando la pasión y sofisticación del tango."
            }
        },
        "buttons": [
            {
                "text": ""
            },
            {
                "text": ""
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png"
    }
};

const datasourcePersonajesDestacados = {
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
        "title": "Personajes Destacados de Buenos Aires",
        "listItems": [
            {
                "primaryText": "Jorge Luis Borges",
                "imageSource": "https://th.bing.com/th?q=Imagen+De+Jorge+Luis+Borges&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247"
            },
            {
                "primaryText": "Eva Perón",
                "imageSource": "https://th.bing.com/th/id/OIP.1KM0rMPvtOC6P_xARbxZkwHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            },
            {
                "primaryText": "Carlos Gardel",
                "imageSource": "https://th.bing.com/th/id/OIP.9upOdegv9Lzo8aEqmAM_0wHaFj?w=202&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Di, \"Alexa, háblame de los personajes destacados\""
    }
};

const datasourceMusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://pruebamabel.s3.us-east-2.amazonaws.com/WhatsApp+Audio+2024-07-03+at+5.17.14+PM.mpeg"
            ],
            "backgroundImage": "https://th.bing.com/th/id/OIP.9xEcQq0xfpt--bBZ0TO2uQHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "coverImageSource": "https://i.ytimg.com/vi/sq5AlBkpw6E/maxresdefault.jpg",
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

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola! Bienvenido a Curiosidades de la Ciudad de Buenos Aires. Puedes decir:"Háblame de Buenos Aires" o si deseas detenerme solo di "cerrar ciudad Buenos Aires" o puedes decir "Ayuda". Entonces, ¿Cómo puedo ayudarte hoy?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_BIENVENIDA, datasourceBienvenida);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DescripcionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionIntent';
    },
    handle(handlerInput) {
        const speechText = 'Buenos Aires es la capital de Argentina y una de las ciudades más vibrantes de América del Sur, conocida por su arquitectura europea, sus tangos apasionados y su rica historia cultural.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_DESCRIPCION, datasourceDescripcion);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const TouristPlacesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TouristPlacesIntent';
    },
    handle(handlerInput) {
        const speechText = 'Buenos Aires cuenta con una variedad de lugares turísticos imperdibles. Desde el histórico barrio de La Boca con sus coloridas casas y tango en las calles, hasta el elegante barrio de Recoleta con su famoso cementerio y museos. También puedes visitar la imponente Casa Rosada, sede del gobierno argentino, y el Teatro Colón, uno de los teatros de ópera más importantes del mundo.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_LUGARES_TURISTICOS, datasourceLugaresTuristicos);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const ComidaTipicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const speechText = 'La comida típica de Buenos Aires es deliciosa y variada. Prueba las empanadas argentinas, los asados criollos y los dulces alfajores.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_COMIDA_TIPICA, datasourceComidaTipica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const TrajeTipicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const speechText = 'El traje típico de Buenos Aires refleja la influencia de la cultura gaucha. Consiste en bombachas de campo, botas de cuero y un sombrero de ala ancha.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TRAJE_TIPICO, datasourceTrajeTipico);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const PersonajesDestacadosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesDestacadosIntent';
    },
    handle(handlerInput) {
        const speechText = 'Buenos Aires ha sido hogar de muchas figuras destacadas en la historia y la cultura. Entre ellos se encuentran el escritor Jorge Luis Borges, la activista Eva Perón y el futbolista Diego Maradona.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PERSONAJES_DESTACADOS, datasourcePersonajesDestacados);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const speechText = 'La música de Buenos Aires es famosa por el tango, un género musical y una danza apasionada. Escucha los ritmos nostálgicos de Carlos Gardel o las composiciones contemporáneas de Astor Piazzolla.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MUSICA, datasourceMusica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const ExitHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós! ¡Espero que hayas disfrutado aprendiendo sobre Buenos Aires!';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_CERRAR);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme sobre Buenos Aires, como: háblame de Buenos Aires, lugares turísticos de Buenos Aires, comida típica de Buenos Aires, traje típico de Buenos Aires, personajes destacados de Buenos Aires, o escuchar música de Buenos Aires. ¿Cómo puedo ayudarte hoy?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_AYUDA, datasourceAyuda);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ERROR);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        const speakOutput = 'Lo siento, hubo un problema. Por favor, inténtalo de nuevo más tarde.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionIntentHandler,
        TouristPlacesIntentHandler,
        ComidaTipicaIntentHandler,
        TrajeTipicoIntentHandler,
        PersonajesDestacadosIntentHandler,
        MusicaIntentHandler,
        ExitHandler,
        HelpHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
