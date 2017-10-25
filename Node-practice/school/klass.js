var student = require('./student');
var teacher = require('./teacher');

/*teacher.add('Scott');*/

function add(teacherName,students){
	teacher.add(teacherName);

	students.forEach(function(item,index){
		student.add(item);
	});
}

exports.add = add;  //如果你希望你的模块成为一个传统的模块实例

/*module.exports = add;*/ //如果你希望你的模块成为一个特别的对象类型