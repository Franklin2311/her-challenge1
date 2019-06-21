		google.charts.load('current', {'packages':['gauge', 'line', 'timeline','corechart']});
		google.charts.setOnLoadCallback(drawChart);
		
		//Speed chart
		
		function drawChart() {
			
			var speedData = google.visualization.arrayToDataTable([
				['Label', 'Value'],
				['Speed', 1250,],
			]);
			
			// visuele instelling klok
			
			var speedOptions = {
				height: 250,
				redFrom: 21250, redTo: 25000,
				yellowFrom: 16250, yellowTo: 21250,
				greenFrom: 0, greenTo:16250,
				minorTicks: 5,
				max: 25000,
			};
			
			var speedChart = new google.visualization.Gauge(document.getElementById('chart_speed'));
			
			speedChart.draw(speedData, speedOptions);
			
			// instelling snelheidsmeter tick
			
			setInterval(function() {
				speedData.setValue(0, 1, 19000 + Math.round(5000 * Math.random()));
				speedChart.draw(speedData, speedOptions);
			}, 1000);
			
			// Fuel Chart
			
			var fuelData = google.visualization.arrayToDataTable([
				['Distance in km', 'Fuel'],
				['50 km',  1000],
				['100 km',  870],
				['150 km',  820],
				['200 km',  790],
				['250 km',  730],
				['300 km',  690],
				['350 km',  660],
				['400 km',  580],
				['550 km',  520],
				['500 km',  470],
				
			]);
			
			// Opmaak grafiek & instellingen
			
			var fuelOptions = {
				chart: {
					title: 'Amount in liters'
				},
				curveType: 'function',
				legend: { position: 'none' },
				colors:['orange']
			};	
			
			var fuelChart = new google.charts.Line(document.getElementById('chart_fuel'));
			
			fuelChart.draw(fuelData, fuelOptions);
			
			// Stock chart
			
			var stockData = google.visualization.arrayToDataTable([
				["Element", "Amount in kilograms", { role: "style" } ],
				["Meat", 35.78, "#BA5359"], //stroke-color: werkt niet
				["Fish", 23.12, "#ADD1F0"],
				["Vegetables", 46.13, "#C2D450"],
				["Fruit", 31.45, "#F4993F"]
			]);
			
			var stockView = new google.visualization.DataView(stockData);
			stockView.setColumns([0, 1,
				{ calc: "stringify",
				sourceColumn: 1,
				type: "string",
				role: "annotation" },
				2]);
				
				var stockOptions = {
					title: "Amount in kilograms",
					bar: {groupWidth: "95%"},
					legend: {position: 'none'},
				};
				var stockChart = new google.visualization.ColumnChart(document.getElementById("chart_stock"));
				stockChart.draw(stockView, stockOptions);
				
				// passengers
				
				var passengerData = google.visualization.arrayToDataTable([
					['Kind of person', 'Quantity'],
					['Women',     120], 
					['Men',  110], 
					['Animals', 32], 
					['Aliens',    70]
				]);
				
				var passengerOptions = {
					
					// opmaak & instellinge grafiek
					
					legend: 'none',
					is3D: false,
					backgroundColor: 'blue',
					pieSliceTextStyle: {
						color: 'black', bold: 1,
					},
					backgroundColor: 'transparent',
					slices: {
						0: { color: '#FBA2F4' },
						1: { color: '#ADD1F0' },
						2: { color: '#C2D450' },
						3: { color: '#F4993F' }
					}
				};
				
				var passengerChart = new google.visualization.PieChart(document.getElementById('chart_passenger'));
				passengerChart.draw(passengerData, passengerOptions);
			}
			
			window.addEventListener("resize", function(){
				drawChart();
			});