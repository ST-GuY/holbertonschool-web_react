interface Teacher {
	readonly firstName: string;
	readonly lastname: string;
	fullTimeEmployee: boolean;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastname: 'Joe',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
