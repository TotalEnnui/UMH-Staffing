/** UMH JS ***/

src="https://code.jquery.com/jquery-1.12.4.js";
src="https://code.jquery.com/ui/1.12.1/jquery-ui.js;

$(document).ready(function(){

//global definitions	
	
//*****Unit Grids************

// CCU			
			var CCU_Day 	= [	24,14,2,
							23,14,2,
							22,13,2,
							21,13,2,
							20,12,2,
							19,12,2,
							18,11,2,
							17,11,2,
							16,10,2,
							15,10,2,
							14,9,2,
							13,9,1,
							12,8,1,
							11,8,1,
							10,7,1,];

			var CCU_Night = [24,14,2,
							23,14,2,
							22,13,2,
							21,13,2,
							20,12,2,
							19,12,2,
							18,11,2,
							17,11,2,
							16,10,2,
							15,10,2,
							14,9,2,
							13,9,1,
							12,8,1,
							11,8,1,
							10,7,1, ];

			var i7E_DayArr = 	[32,9,3,
							31,9,3, 
							30,9,3, 
							29,9,3, 
							28,8,3, 
							27,8,3, 
							26,8,3, 
							25,8,3, 
							24,7,3, 
							23,7,2, 
							22,7,2, 
							21,7,2, 
							20,6,2, 
							19,6,2, 
							18,6,2, 
							17,6,2, 
							16,5,2, 
							15,5,2, 
							14,5,2, 
							13,5,1, 
							12,4,1, 
							11,4,1, 
							10,4,1, 
							9,4,1, 
							8,3,1, 
							7,2,0, 
							6,2,0, 
							5,2,0, 
							4,2,0, ];

							
			var i7E_NightArr = [32,9,3, 
							31,9,3, 
							30,8,3, 
							29,8,3, 
							28,8,3, 
							27,8,3, 
							26,7,3, 
							25,7,3, 
							24,7,3, 
							23,7,2, 
							22,6,2, 
							21,6,2, 
							20,6,2, 
							19,6,2, 
							18,5,2, 
							17,5,2, 
							16,5,2, 
							15,4,2, 
							14,4,1, 
							13,4,1, 
							12,4,1, 
							11,4,1, 
							10,3,1, 
							9,3,1, 
							8,2,1, 
							7,2,0, 
							6,2,0, 
							5,2,0, 
							4,2,0,];

			var i9E_DayArr = [  40,9,4, 
								39,9,4, 
								38,9,4, 
								37,9,4, 
								36,9,4, 
								35,8,4, 
								34,8,4, 
								33,8,3, 
								32,8,3, 
								31,8,3, 
								30,7,3, 
								29,7,3, 
								28,7,3, 
								27,7,3, 
								26,7,3, 
								25,6,3, 
								24,6,3, 
								23,6,3, 
								22,6,2, 
								21,6,2, 
								20,5,2, 
								19,5,2, 
								18,5,2, 
								17,4,2, 
								16,4,2, 
								15,4,2, 
								14,4,2, 
								13,4,2, 
								12,4,1, 
								11,3,1, 
								10,3,1, 
								9,2,1, 
								8,2,1, 
								7,2,1, 
								6,2,0, 
								5,2,0, ];
								
				var i9E_NightArr = [ 33,7,3, 
								32,7,3, 
								31,7,3, 
								30,7,3, 
								29,7,3, 
								28,6,3, 
								27,6,3, 
								26,6,2, 
								25,6,2, 
								24,6,2, 
								23,5,2, 
								22,5,2, 
								21,5,2, 
								20,5,2, 
								19,4,2, 
								18,4,2, 
								17,4,2, 
								16,4,2, 
								15,4,1, 
								14,3,1, 
								13,3,1, 
								12,3,1, 
								11,3,1, 
								10,3,1, 
								9,2,1, 
								8,2,1, 
								7,2,0, 
								6,2,0, 
								5,2,0, ]
				
				var i9W_DayArr = [	32,8,3,
									31,8,3,
									30,7,3,
									29,7,3,
									28,7,3,
									27,7,3,
									26,7,3,
									25,6,3,
									24,6,3,
									23,6,2,
									22,6,2,
									21,6,2,
									20,5,2,
									19,5,2,
									18,5,2,
									17,5,2,
									16,4,2,
									15,4,2,
									14,4,2,
									13,4,2,
									12,4,1,
									11,4,1,
									10,3,1,
									9,2,1,
									8,2,1,
									7,2,1,
									6,2,0,
									5,2,0,]
									
				var i9W_NightArr = [32,7,3,
									31,7,3,
									30,7,3,
									29,7,3,
									28,7,3,
									27,6,3,
									26,6,2,
									25,6,2,
									24,6,2,
									23,6,2,
									22,5,2,
									21,5,2,
									20,5,2,
									19,5,2,
									18,4,2,
									17,4,2,
									16,4,2,
									15,3,2,
									14,3,2,
									13,3,1,
									12,3,1,
									11,3,1,
									10,3,1,
									9,2,1,
									8,2,1,
									7,2,0,
									6,2,0,
									5,2,0,]
									
				var i6E_DayArr = [	32,9,3, 
									31,9,3, 
									30,9,3, 
									29,9,3, 
									28,8,3, 
									27,8,3, 
									26,8,3, 
									25,8,3, 
									24,7,3, 
									23,7,2, 
									22,7,2, 
									21,7,2, 
									20,6,2, 
									19,6,2, 
									18,6,2, 
									17,6,2, 
									16,5,2, 
									15,5,2, 
									14,5,2, 
									13,5,1, 
									12,4,1, 
									11,4,1, 
									10,4,1, 
									9,4,1, 
									8,3,1, 
									7,2,0, 
									6,2,0, ]
									
				var i6E_NightArr = [32,9,3, 
									31,9,3, 
									30,9,3, 
									29,9,3, 
									28,8,3, 
									27,8,3, 
									26,8,3, 
									25,8,3, 
									24,7,3, 
									23,7,2, 
									22,7,2, 
									21,7,2, 
									20,6,2, 
									19,6,2, 
									18,6,2, 
									17,6,2, 
									16,5,2, 
									15,5,2, 
									14,5,2, 
									13,5,1, 
									12,4,1, 
									11,4,1, 
									10,4,1, 
									9,4,1, 
									8,3,1, 
									7,2,0, 
									6,2,0, ]






// AM or PM
		bTime = true; // AM = true, PM = false

// UMH units		
		var iCCU = 0;
		var i7E = 0;
		var i9E = 0;
		var i9W = 0;
		var i6E = 0;
		var i7W = 0; 
		var i8O = 0; 
		var i4W = 0;
		var iCCRU = 0;
		
// main object definition						
		function obj(iMin, iMax, iAMGrid, iPMGrid) 
		{
			this.iMin = iMin;
			this.iMax = iMax;
			this.AM_Grid = iAMGrid;
			this.PM_Grid = iPMGrid;
			this.returnStaff = function(iCensus, bAM) 
			{
				bAM ? iGrid = iAMGrid : iGrid = iPMGrid;
				
				var index = 0;
				var iRNs = 0;
				var iPCTs = 0;
				
				if((iCensus > this.iMin-1) && (iCensus < this.iMax+1))
				{
					while(iGrid[index] != iCensus)
					{
						index += 3;
					}
					iRNs 	= iGrid[index + 1];
					iPCTs 	= iGrid[index + 2];
				}
				return [iRNs, iPCTs];
			}
		}

//*******************
//*** Event Handlers
//******************
		var InputCCU 	= document.getElementById("CCU_input");
		var Input7E_EH	= document.getElementById("7E_input");
		var Input9E_EH	= document.getElementById("9E_input");
		var Input9W_EH	= document.getElementById("9W_input");
		var Input6E_EH 	= document.getElementById("6E_input");

		InputCCU.addEventListener("input", add);
		Input7E_EH.addEventListener("input", add);
		Input9E_EH.addEventListener("input", add);
		Input9W_EH.addEventListener("input", add);
		Input6E_EH.addEventListener("input", add);

//*******************
//*** AM or PM radio
//*******************		
		$('input[type=radio]').click(function(){
			if (this.id == "IDradioAM"){
				bTime = true;
				add();
			}
			if (this.id == "IDradioPM"){
				bTime = false;
				add();
			}
		});
		
//**********************
//  Datepicker function
//**********************	

		  $('#myDate').datepicker( {
			onSelect: function(someDate) {
				var date = $(this).datepicker('getDate');
				weekDay = ($.datepicker.formatDate('DD', date));
				console.log(weekDay);			
			},
		  });

		function add(){  // convert input census to unit staffing
			iCCU = parseInt(InputCCU.value) || 0;	
			i7E  = parseInt($('#7E_input').val() || 0);	
			i9E  = parseInt($('#9E_input').val() || 0);	
			i9W  = parseInt($('#9W_input').val() || 0);	
			i6E  = parseInt($('#6E_input').val() || 0);

	//		iCCU = parseInt($('#CCU_input').val() || 0);  //jquery version
					
	/*******************
			i9E  = parseInt($('#9E_input').val() || 0);
			i9W  = parseInt($('#9W_input').val() || 0);
			i6E  = parseInt($('#6E_input').val() || 0);
			i7W  = parseInt($('#7W_input').val() || 0);
			i8O  = parseInt($('#8O_input').val() || 0);
			i4W  = parseInt($('#4W_input').val() || 0);
			iCCRU = parseInt($('#CCRU_input').val() || 0);
	**************************/
					
//***************
// *** obj creation
//*****************
	
			var CCUobj = new obj(10, 24, CCU_Day, CCU_Night);
			var _7Eobj = new obj(4, 32, i7E_DayArr, i7E_NightArr);
			var _9Eobj = new obj(5, 34, i9E_DayArr, i9E_NightArr);
			var _9Wobj = new obj(5, 32, i9W_DayArr, i9W_NightArr);
			var _6Eobj = new obj(6, 32, i6E_DayArr, i6E_NightArr);


			/*************************
			var 9Eobj = new obj(10, 24, 9E_Day, 9E_Night);
			var 9Wobj = new obj(10, 24, 9W_Day, 9W_Night);
			var 6Eobj = new obj(10, 24, 6E_Day, 6E_Night);
			var 7Wobj = new obj(10, 24, 7W_Day, 7W_Night);
			// var 8Oobj = new obj(10, 24, AM1, AM2, PM1, PM2);
			var 4Wobj = new obj(10, 24, 4W_Day, 4W_Night);
			var CCRUobj = new obj(10, 24, CCRU_Day, CCRU_Night);
	************************/
					
			iStaff = CCUobj.returnStaff(iCCU, bTime);
			if((iStaff[0] != 0) && (iStaff[1] != 0)) {
				document.getElementById("CCU_RNS").innerHTML = iStaff[0];
				document.getElementById("CCU_PCTS").innerHTML = iStaff[1];
			} else {
				document.getElementById("CCU_RNS").innerHTML = " ";
				document.getElementById("CCU_PCTS").innerHTML = " ";
			}
			
			iStaff = _7Eobj.returnStaff(i7E, bTime);
			if((iStaff[0] != 0) && (iStaff[1] != 0)) {
				document.getElementById("7E_RNS").innerHTML = iStaff[0];
				document.getElementById("7E_PCTS").innerHTML = iStaff[1];
			} else {
				document.getElementById("7E_RNS").innerHTML = " ";
				document.getElementById("7E_PCTS").innerHTML = " ";
			}
			
			iStaff = _9Eobj.returnStaff(i9E, bTime);
			if((iStaff[0] != 0) && (iStaff[1] != 0)) {
				document.getElementById("9E_RNS").innerHTML = iStaff[0];
				document.getElementById("9E_PCTS").innerHTML = iStaff[1];
			} else {
				document.getElementById("9E_RNS").innerHTML = " ";
				document.getElementById("9E_PCTS").innerHTML = " ";
			}
			
			iStaff = _9Wobj.returnStaff(i9W, bTime);
			if((iStaff[0] != 0) && (iStaff[1] != 0)) {
				document.getElementById("9W_RNS").innerHTML = iStaff[0];
				document.getElementById("9W_PCTS").innerHTML = iStaff[1];
			} else {
				document.getElementById("9W_RNS").innerHTML = " ";
				document.getElementById("9W_PCTS").innerHTML = " ";
			}
			
			iStaff = _6Eobj.returnStaff(i6E, bTime);
			if((iStaff[0] != 0) && (iStaff[1] != 0)) {
				document.getElementById("6E_RNS").innerHTML = iStaff[0];
				document.getElementById("6E_PCTS").innerHTML = iStaff[1];
			} else {
				document.getElementById("6E_RNS").innerHTML = " ";
				document.getElementById("6E_PCTS").innerHTML = " ";
			}
		}
		function radioFuncAM() {
			bTime = document.getElementById("radioAmPm").value = true;
			add();
		}
		function radioFuncPM() {
			bTime = document.getElementById("radioAmPm").value = false;
			add();
		}
});
	
		</script>
