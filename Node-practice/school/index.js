var klass = require('./klass');

/*klass.add('Scott',['111','222']);*/

exports.add = function(klasses){
	klasses.forEach(function(item,index){
		/*var _klass = index;*/
		var teacherName = item.teacherName;
		var students = item.students;

		klass.add(teacherName,students)
	});
}