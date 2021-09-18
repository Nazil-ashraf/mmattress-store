import { underscore as _underscore, dasherize as _dasherize, pluralize } from "inflected";

const dasherizeCache = {};
const underscoreCache = {};

export function dasherize(word) {
    if (typeof dasherizeCache[word] !== "string") {
        const dasherized = _dasherize(underscore(word));

        dasherizeCache[word] = dasherized;
    }

    return dasherizeCache[word];
}

export function underscore(word) {
    if (typeof underscoreCache[word] !== "string") {
        const underscored = _underscore(word);

        underscoreCache[word] = underscored;
    }

    return underscoreCache[word];
}

export const normalize = (schema, type, payload) => {

    let attrs = payload;
    let modelName = type; //camelize(type);
    let modelClass = schema.modelClassFor(modelName);
    let { belongsToAssociations, hasManyAssociations } = modelClass;
    let belongsToKeys = Object.keys(belongsToAssociations);
    let hasManyKeys = Object.keys(hasManyAssociations);

    let jsonApiPayload = {
        data: {
            type: pluralize(type),
            attributes: {},
        },
    };
    if (attrs.id) {
        jsonApiPayload.data.id = attrs.id;
    }

    let relationships = {};

    Object.keys(attrs).forEach((key) => {
        if (key !== "id") {
            if (belongsToKeys.includes(key)) {
                let association = belongsToAssociations[key];
                let associationModel = association.modelName;
                relationships[dasherize(key)] = {
                    data: {
                        type: associationModel,
                        id: attrs[key],
                    },
                };
            } else if (hasManyKeys.includes(key)) {
                let association = hasManyAssociations[key];
                let associationModel = association.modelName;
                let data = attrs[key].map(associatedModel => {
                    return {
                        type: associationModel,
                        id: associatedModel.id
                    };
                });
                relationships[dasherize(key)] = { data };
            } else {
                jsonApiPayload.data.attributes[dasherize(key)] = attrs[key];
            }
        }
    });
    if (Object.keys(relationships).length) {
        jsonApiPayload.data.relationships = relationships;
    }
    console.log("normalize", jsonApiPayload)
    return jsonApiPayload;
}