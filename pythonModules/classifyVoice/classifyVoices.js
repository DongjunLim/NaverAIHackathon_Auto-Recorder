var PythonShell = require('python-shell');

module.exports.classifyMasterOfSound = function (deviceID, fileName){
	var options = {
		mode: 'text',
		encoding: 'utf8',
		pythonOptions: ['-u'],
		scriptPath: '',
		args: [deviceID, fileName],
		pythonPath: ''
	};
	PythonShell.run('classifyMasterOfSound.py', options, function (err) {
		if (err) 
			throw err;
		else
			console.log("classification Completed Successfully!");
	});
}

//여기에 자르는 함수 넣으면 끝