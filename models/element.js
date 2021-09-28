const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ElementSchema = new Schema(

// {
//     name: String,
//     source: String,
//     something: {
//         this: Number,
//         that: Number
//     }
// }
    
    {
	id: String,
	source: {type: String, required:[true, 'must have source']},
	sourceIdentityId: String,
	reference: {
		referenceId: String,
		referenceType: String,
	},
	state: String,
	payload: {
		source: String,
		reportType: String,
		message: String,
		reportId: String,
		referenceResourceId: String,
		referenceResourceType: String,
	},
	created: String,
}
);
const Element = mongoose.model('element', ElementSchema);

module.exports = Element;
