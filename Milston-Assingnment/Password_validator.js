function passwordValidator(password, confirmPassword) {
	if (password === confirmPassword) {
		console.log('Password Matched, Password validation successful.');
	}
	else {
		console.log('Password did not match. Password validation unsuccessful');
	}
}

passwordValidator('password123', 'password123')
passwordValidator('password123', 'password123')