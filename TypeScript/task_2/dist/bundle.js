/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVdBO0lBQUE7SUFVQSxDQUFDO0lBVEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3JCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUssVUFBVTtBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUksV0FBVztBQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuXHR9XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcblx0fVxuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XG5cdH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XG5cdH1cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuXHR9XG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuXHRpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG5cdFx0cmV0dXJuIG5ldyBUZWFjaGVyKCk7XG5cdH1cblx0cmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgICAgIC8vIFRlYWNoZXJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgICAgLy8gRGlyZWN0b3JcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpOyAgLy8gRGlyZWN0b3JcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=