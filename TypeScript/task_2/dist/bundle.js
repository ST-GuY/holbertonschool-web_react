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
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVdBO0lBQUE7SUFVQSxDQUFDO0lBVEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3JCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUMvQyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQy9DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDckM7SUFDRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN2QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDMUIsT0FBTyxlQUFlLENBQUM7S0FDdkI7SUFDRCxPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblx0d29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG5cdH1cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuXHR9XG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcblx0fVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcblx0fVxuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG5cdH1cblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG5cdGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcblx0XHRyZXR1cm4gbmV3IFRlYWNoZXIoKTtcblx0fVxuXHRyZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcblx0cmV0dXJuIGVtcGxveWVlIGluc3RhbmNlb2YgRGlyZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcbiAgfVxuICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xufVxuXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcblx0aWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xuXHRcdHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG5cdH1cblx0cmV0dXJuICdUZWFjaGluZyBIaXN0b3J5Jztcbn1cblxuY29uc29sZS5sb2codGVhY2hDbGFzcygnTWF0aCcpKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==