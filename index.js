import Typed from 'typed.js';

const desciptionID = document.getElementById('description');
const parentID = document.getElementById('name-desciption-div');

document.addEventListener('DOMContentLoaded', function() {
    Typed.new('#descirption', {
        stringsElement: '#name-desciption-div'
    });
})
