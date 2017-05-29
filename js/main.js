// main.js
(function(){

	var app = angular.module("cv", []);
	app.controller("main", function($scope){
		$scope.menuopen = false;
		$scope.menuitems = [
			{
				purpose: "sum",
				// this title is for whole block
				title: "Summary",
				id: "mn_summary",
				fold: false,
				items: [
					{
						id: "cnt_sum_0",
						// this title is for each single item under the block
						title: "Personal Summary",
						// subtitle is for some extra info such as degree etc
						subtitle: "",
						date: "2003-2007",
						// this item is for a list under that title basically like skillname: skill level description
						items: [
							{
								item_name:"",
								item_cnt:""
							}
						]// end of inner items
					}
				]// end of outter items
			},
			{
				purpose: "edu",
				title: "EDU",
				id: "mn_edu",
				fold:false,
				items: [
					{
						id: "cnt_sum_0",
						// this title is for each single item under the block
						title: "CAUC",
						// subtitle is for some extra info such as degree etc
						subtitle: "BA",
						date: "2003-2007",
						// this item is for a list under that title basically like skillname: skill level description
						items: [
							{
								item_name:"",
								item_cnt:""
							}
						]// end of inner items
					}
				]// end of outter items
			},
			{
				purpose: "exp",
				title: "EXP",
				id: "mn_exp",
				fold:false,
				items: [
					{
						id: "cnt_exp_0",
						// this title is for each single item under the block
						title: "AIRCN CARGO",
						// subtitle is for some extra info such as degree etc
						subtitle: "AS ENG",
						date: "2007-2011",
						// this item is for a list under that title basically like skillname: skill level description
						items: [
							{
								item_name:"",
								item_cnt:""
							}
						]// end of inner items
					}
				]// end of outter items
			},
			{
				purpose: "prj",
				title: "PRJ",
				id: "mn_prj",
				fold:false,
				items: [
					{
						id: "cnt_prj_0",
						// this title is for each single item under the block
						title: "OGS1",
						// subtitle is for some extra info such as degree etc
						subtitle: "description about the project",
						date: "2007-2011",
						// this item is for a list under that title basically like skillname: skill level description
						items: [
							{
								item_demo:"demo image link",
								item_link:"project link"
							}
						]// end of inner items
					}
				]// end of outter items
			}
		];
	});
	app.directive("sidemenu", function(){
		return {
			restrict: "AE",
			controller: function($scope){

			},
			link: function(scope, EL, attrs){
				EL.on("click", function(event){
					event.stopPropagation();
				});	
			}
		};
	});
	app.directive("scrollbody", function(){
		return {
			restrict: "AE",
			controller: function($scope){

			},
			link: function(scope, EL, attrs){
				EL.on("mousewheel", function(){
					var e = window.event || e; // old IE support
					var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
					$(this).scrollTop(  $(this).scrollTop()-delta*20 );
				});
			}
		};
	});
	app.directive("menublock", function(){
		return {
			restrict:"AE",
			scope: {
				menuitem:"="
			},
			templateUrl: "templates/menublock.html",
			controller: function($scope){
				$scope.scrollCntBlk = function(item){
					if(item.scrCbk){
						item.scrCbk();
					}
				}
			},
			link: function(scope, EL, attrs){
				var d3el = d3.select(EL[0]);
				EL.find(".togglemenu")
					.on("click", function(){
						EL.find(".mb_body")
							.slideToggle("fast");
					});

			}// end of link
		};// end of return
	});
	app.directive("cntblock", function(){
		return {
			restrict:"AE",
			scope: {
				cntitem:"="
			},
			templateUrl: "templates/contentblock.html",
			link: function(scope, EL, attrs){
				function scrollBlock(){
					var top = this.offset().top;

					console.log(scope.cntitem);
					$(".menu_content").scrollTop(top);
				}
				var scrollCallback = scrollBlock.bind(EL);
				scope.cntitem.scrCbk = scrollCallback;
				// scope.cntitem.clkBck = "changed";

			}
		};// end of return
	});			



})();

