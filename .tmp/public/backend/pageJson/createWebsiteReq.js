{
    "title": "WebsiteReq form",
    "name": "WebsiteReq",
    "jsonPage": "viewWebsiteReq",
    "desciption": "",
    "pageType": "create",
    "urlFields": ["newWebsiteReq"],
    "fields": [{
        "name": "First Name",
        "type": "text",
        "tableRef": "firstname",
        "placeholder": "",
        "validation": ["required", "trim"],
        "id": "firstname",
        "url": ""
    }, {
        "name": "Middle Name",
        "type": "text",
        "tableRef": "middlename",
        "placeholder": "",
        "id": "middlename",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "Last Name",
        "type": "text",
        "tableRef": "lastname",
        "placeholder": "",
        "id": "lastname",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "Company",
        "type": "text",
        "tableRef": "company",
        "placeholder": " ",
        "id": "company",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "What is the business and how will your website advance it?",
        "type": "text",
        "tableRef": "company",
        "placeholder": " ",
        "id": "company",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "What message is the website supposed to convey?",
        "type": "text",
        "tableRef": "company",
        "placeholder": " ",
        "id": "company",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "Who is the primary audience for the website (demographics)?",
        "type": "text",
        "tableRef": "company",
        "placeholder": " ",
        "id": "company",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "What is it that you require? If it’s a mobile app or social media, please share specific requirements.",
        "type": "tags",
        "tableRef": "accomplishBrand",
        "placeholder": "",
        "id": "accomplishBrand",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "fieldType": "array",
        "dropDownType": "multiple",
        "dropDown": ["Mobile App", "Social Medial Integration", "Website Design", "Website Coding"]
    }, {
        "name": "Do you need a website that can work smoothly on mobile devices like Samsung Galaxy (Android) and the iPhone (iOS)? This means the site has to be a ‘Responsive Design’ which adjusts dynamically to various screen sizes and resolutions.",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "Do you need a catalogue for the site?",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "Do you need a copywriter?",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "If you are using existing copy on your current website, will it need to be modified in any way?",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "Do you need a web domain name and hosting for the website?",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "Would you like a Static or Dynamic website?",
        "type": "tags",
        "tableRef": "brandname",
        "placeholder": "",
        "id": "brandname",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["Yes", "No"]
    }, {
        "name": "Which of the following characteristics best describe the personality you want your brand to have?",
        "type": "tags",
        "tableRef": "brandPersonality",
        "placeholder": "",
        "id": "brandPersonality",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "fieldType": "array",
        "dropDownType": "multiple",
        "dropDown": ["Unconventional", "Practical", "Inventive", "Funny", "Leader", "Powerful", "Dependable", "Protective", "Creative", "Optimistic",
            "Nurturing", "Realistic", "Adventurous", "Entertaining", "Imaginative", "Artistic", "Truthful", "Mischievous", "Ambitious", "Helpful",
            "Innovative", "Functional", "Thoughtful", "Strong", "Wise", "Rebellious", "Liberating", "Romantic", "Enthusiastic", "Intimate", "Simple", "Brave",
            "Honest"
        ]
    }, {
        "name": "Do you see your Brand being more Feminine (1) or Masculine (10)?",
        "type": "tags",
        "tableRef": "brandFeminineMasculine",
        "placeholder": "",
        "id": "brandFeminineMasculine",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
        "name": "Do you see your Brand being Younger (1) or Mature (10)?",
        "type": "tags",
        "tableRef": "brandYoungerMature",
        "placeholder": "",
        "id": "brandYoungerMature",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
        "name": "Do you see your Brand being more Affordable (1) or Luxurious (10)?",
        "type": "tags",
        "tableRef": "brandAffordableLuxurious",
        "placeholder": "",
        "id": "brandAffordableLuxurious",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
        "name": "Do you see your Brand being more Classic (1) or Modern (10)?",
        "type": "tags",
        "tableRef": "brandClassicModern",
        "placeholder": "",
        "id": "brandClassicModern",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
        "name": "Do you see your Brand being more Playful (1) or Serious (10)?",
        "type": "tags",
        "tableRef": "brandPlayfulSerious",
        "placeholder": "",
        "id": "brandPlayfulSerious",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "dropDownType": "single",
        "dropDown": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    }, {
        "name": "What do you want your customers to feel when interacting with the Brand? ",
        "type": "tags",
        "tableRef": "brandPersonality",
        "placeholder": "",
        "id": "brandPersonality",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "fieldType": "array",
        "dropDownType": "multiple",
        "dropDown": ["Happiness", "Surprise", "Inspiration", "Anxiety", "Temptation", "Relief", "Entertainment", "Empowerment",
            "Nostalgia", "Provocation", "Some specific unique/custom functionality.", "Satisfaction"
        ]
    }, {
        "name": "What colors do you associate with the brand?",
        "type": "text",
        "tableRef": "brandcolor",
        "placeholder": "",
        "id": "brandcolor",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "What colors do you associate with the brand?",
        "type": "text",
        "tableRef": "brandorigin",
        "placeholder": "",
        "id": "brandcolor",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "What colors do you associate with the brand?",
        "type": "text",
        "tableRef": "brandfuture",
        "placeholder": "",
        "id": "brandcolor",
        "validation": ["required", "trim"],
        "url": ""
    }, {
        "name": "Where all do you intend to use your Brand identity to communicate with the world?",
        "type": "tags",
        "tableRef": "brandidentity",
        "placeholder": "",
        "id": "brandidentity",
        "validation": ["required", "trim"],
        "url": "",
        "dropDownField": "",
        "fieldType": "array",
        "dropDownType": "multiple",
        "dropDown": ["Print", "Online (Website, Social Media, Email)", "Video", "Events and Experiences", "Mobile"]
    }, {
        "name": "Is there something in particular you love and want your brand identity to include?",
        "type": "text",
        "tableRef": "brandlove",
        "placeholder": "",
        "id": "brandlove",
        "validation": ["required", "trim"],
        "url": ""
    }],
    "action": [{
        "name": "submit",
        "action": "submitBrandingBrief",
        "stateName": {
            "page": "page",
            "json": {
                "id": "viewBrandingBrief"
            }
        }
    }, {
        "name": "cancel",
        "sideMenuRedirect": true,
        "stateName": {
            "page": "page",
            "json": {
                "id": "viewWebsiteReq"
            }
        }
    }],
    "apiCall": {
        "url": "WebsiteReq/save"
    }
}