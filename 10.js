var template_1 = "/^#?([a-f0-9]{6}|[a-f0-9]{3})$/";
var template_2 = "/^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$/";
var template_3 = "/^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/";
var template_4 = "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
var template_5 = "/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/";


var template_1_1 = "/^#?([a-f0-9]{6}|[a-f0-9]{3})$/";
var template_2_1 = "/^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$/";
var template_3_1 = "/^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/";
var template_4_1 = "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
var template_5_1 = "/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/";

var template = template_1 + template_1_1 +
    template_2 + template_2_1 +
    template_3 + template_3_1 +
    template_4 + template_4_1 +
    template_5 + template_5_1;
console.log(template) //Evaluate 'template'


