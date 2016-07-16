
var app = angular.module('table-row', []);


app.directive("tableRow", function() {
	alert("tableRow");
	return {
		restrict : 'E',
		templateUrl : 'TableRow.html',
		link: rowNumFunction,
		scope:{
			text:"@num",
		}
	};
});
