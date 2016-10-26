var schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    businessAdvance: {
        type: String,
        required: true
    },
    messageConvey: {
        type: String,
        required: true
    },
    primaryAudience: {
        type: String,
        required: true
    },

    needResponsive: {
        type: String,
        enum: ['Yes', 'No']
    },
    needCatalogue: {
        type: String,
        enum: ['Yes', 'No']
    },
    needCopywriter: {
        type: String,
        enum: ['Yes', 'No']
    },
    needModification: {
        type: String,
        enum: ['Yes', 'No']
    },
    needWebDomain: {
        type: String,
        enum: ['Yes', 'No']
    },
    staticdynamic: {
        type: String,
        enum: ['Yes', 'No']
    },
    userWork: {
        type: String,
        required: true
    },
    userWork: {
        type: String,
        required: true
    },
    userWork: {
        type: String,
        required: true
    },
    accomplishBrand: [String],
    brandPersonality: [String],
    brandFeminineMasculine: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    brandYoungerMature: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    brandAffordableLuxurious: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    brandClassicModern: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    brandPlayfulSerious: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    brandfeeling: [String],
    brandcolor: {
        type: String,
        required: true
    },
    brandcolor: [String],
    brandlogo: [String],
    brandfont: [String],
    brandorigins: {
        type: String,
        required: true
    },
    brandfuture: {
        type: String,
        required: true
    },
    brandidentity: [String],
    brandlove: {
        type: String,
        required: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('WebsiteReq', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);