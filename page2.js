const jsonForm = {
    "components": [
        {
            "type": "textfield",
            "key": "firstName",
            "label": "First Name",
            "input": true
        },
        {
            "type": "textfield",
            "key": "lastName",
            "label": "Last Name",
            "input": true
        }
    ]
};

console.log('Before Formio.builder');
console.log('jsonForm:', jsonForm); // Check the jsonForm object
Formio.builder(document.getElementById('formbuilder'), jsonForm).then(builder => {
    console.log('Form builder instance:', builder);
}).catch(error => {
    console.error('Error during form builder creation:', error);
});
console.log('After Formio.builder');
