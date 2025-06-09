// Initialize chart variables globally
var comp_temp_chart = null;
var tw_type_chart = null;
var pubs_usr_grid = null;
var hts_pubs_chart = null;
var c_anoms_grid = null;
var hts_scatter_chart = null;

// Función de arranque {{{
async function arranque() {
	// Fetch data from Flask backend
	const response = await fetch(`https://canalonce.mx/REST/data/graphs/prueba.json`);
	// const response = await fetch(`/get-evs`);
	const jsonData = await response.json();

	const select_data = jsonData.data;
	// console.log(select_data);

	for (var i = 0; i < select_data.length; i++) {
		var select = document.getElementById("dataSelect");
		var option = document.createElement("option");
		option.text = select_data[i].name;
		option.value = select_data[i].name_original;
		select.add(option);
	}
}
// }}}

// Función para obtener info para visualizaciones {{{
async function fetchData() {
		const response = await fetch(
		'https://canalonce.mx/REST/data/graphs/'+selectedValue+'.json',
	);
	// const selectElement = document.getElementById("dataSelect");
	const selectedValue = selectElement.value;
	// console.log(selectedValue)

	// Fetch data from Flask backend
	const response = await fetch(
		`/get-data?selectedOption=${encodeURIComponent(selectedValue)}`,
	);
	const jsonData = await response.json();

	// Check for errors
	if (jsonData.error) {
		document.getElementById("visualization").innerHTML =
			`<p style="color: red;">Error: ${jsonData.error}</p>`;
		return;
	}

	// console.log(jsonData.data.desc_text)
	document.getElementById("desc_gen").innerHTML = jsonData.data.desc_text;

	// Pass the data to a visualization function
	loadVisualizations(
		comp_temp_chart,
		tw_type_chart,
		pubs_usr_grid,
		hts_pubs_chart,
		c_anoms_grid,
		jsonData.data.data_vis,
	);
}
// }}}

// Funcion para cargar visualizaciones {{{
function loadVisualizations(
	comp_temp_chart,
	tw_type_chart,
	pubs_usr_grid,
	hts_pubs_chart,
	c_anoms_grid,
	data,
) {
	// Destroy existing charts
	if (window.comp_temp_chart) window.comp_temp_chart.destroy();
	if (window.tw_type_chart) window.tw_type_chart.destroy();
	if (window.pubs_usr_grid) window.pubs_usr_grid.destroy();
	if (window.hts_pubs_chart) window.hts_pubs_chart.destroy();
	if (window.c_anoms_grid) window.c_anoms_grid.destroy();

	// Create new charts and store references
	window.comp_temp_chart = draw_fig_comp_temp(
		null,
		data.comp_temp_tw_type,
		"trend_fig_temp_tweet",
	);
	window.tw_type_chart = draw_fig_tw_type(
		null,
		data.tw_count,
		"trend_fig_tipo_tweet",
	);
	window.pubs_usr_grid = draw_fig_usr_pubs(
		null,
		data.usr_tw_count,
		"users_tweets",
	);
	window.hts_pubs_chart = draw_fig_ht_count(
		null,
		data.ht_counts,
		"horizontal_bar_hashtags",
	);
	window.c_anoms_grid = draw_fig_c_anoms(
		null,
		data.usr_top_p,
		"cuentas_anomalas",
	);

	// Handle scatter plot separately
	visScatterHashtags(data.ht_percent);
}
// }}}

// Figura Comportamiento temporal {{{
function draw_fig_comp_temp(chart, response, docElementId) {
	// console.log(response);

	// var timeFormat = 'YYYY/MM/DD HH:MM';
	var timeFormat = "hh:mm:ss DD-MM-YY";

	var rt_vals = response.Retweet;
	var tw_vals = response.Tweet;
	var qt_vals = response.Quote;
	var rp_vals = response.Reply;

	// Check if a chart instance already exists
	if (comp_temp_chart) {
		comp_temp_chart.destroy(); // Destroy the existing comp_temp_chart
	}

	const canvas = document.getElementById(docElementId);
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	comp_temp_chart = new Chart(ctx, {
		type: "bar",
		data: {
			datasets: [
				{
					// label: "Retweet",
					label: "Reposteo",
					backgroundColor: "#05ffa1",
					fill: false,
					data: rt_vals,
				},
				{
					label: "Tweet",
					backgroundColor: "#ef4135",
					fill: false,
					data: tw_vals,
				},
				{
					// label: "Quote",
					label: "Cita",
					backgroundColor: "#3e95cd",
					fill: false,
					data: qt_vals,
				},
				{
					// label: "Reply",
					label: "Respuesta",
					backgroundColor: "#6403ff",
					fill: false,
					data: rp_vals,
				},
			],
		},
		options: {
			title: {
				display: true,
				text: "Comportamiento Temporal",
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "Fecha",
						font: {
							size: 20,
						},
					},
				},
				y: {
					title: {
						display: true,
						text: "Número de publicaciones",
						font: {
							size: 20,
						},
					},
				},
			},
		},
	});
	return comp_temp_chart;
}
// }}}

// Figura Número de pubs por tipo {{{
function draw_fig_tw_type(chart, response, docElementId) {
	/* console.log(response); */

	var tw_counts = response.tw_counts;
	var tw_groups = response.tw_kinds;

	// Check if a chart instance already exists
	if (tw_type_chart) {
		tw_type_chart.destroy(); // Destroy the existing chart
	}

	const canvas = document.getElementById(docElementId);
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	tw_type_chart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: tw_groups,
			datasets: [
				{
					// label: "Número de Tweets",
					backgroundColor: ["#05ffa1", "#ef4135", "#3e95cd", "#6403ff"],
					data: tw_counts,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					title: {
						display: true,
						text: "Tipo",
						font: {
							size: 20,
						},
					},
				},
				y: {
					title: {
						display: true,
						text: "Número de publicaciones",
						font: {
							size: 20,
						},
					},
				},
			},
			legend: { display: false },
			title: {
				display: true,
				text: "Número de Tweets por tipo",
			},
		},
	});
	return tw_type_chart;
}
// }}}

// Tabla numero de pubs por usuario {{{
function draw_fig_usr_pubs(chart, response, docElementId) {
	// console.log(response);
	/* var data = response */

	// function empty(element) {
	//     element.innerHTML = "";
	// }

	const row_data = response.data;
	// console.log(row_data)

	// Check if a chart instance already exists
	if (pubs_usr_grid) {
		pubs_usr_grid.destroy(); // Destroy the existing comp_temp_chart
	}

	// const parent = document.getElementById(docElementId);
	// empty(parent);

	pubs_usr_grid = new gridjs.Grid({
		columns: [
			{
				name: "Cuenta",
				formatter: (_, row) =>
					gridjs.html(
						`<a href='https://twitter.com/${row.cells[0].data}' target="_blank">${row.cells[0].data}</a>`,
					),
			},
			// "Reply",
			"Respuestas",
			// "Retweet",
			"Reposteos",
			// "Quote",
			"Citas",
			"Tweets",
			"Total",
		],
		sort: true,
		resizable: true,
		pagination: {
			limit: 10,
		},
		// width: 800,
		fixedHeader: true,
		data: row_data,
	}).render(document.getElementById(docElementId));
	return pubs_usr_grid;
}
// }}}

// Tabla cuentas anomalas {{{
function draw_fig_c_anoms(chart, response, docElementId) {
	// console.log(response);
	/* var data = response */

	// function empty(element) {
	//     element.innerHTML = "";
	// }
	const row_data = response.data;

	// Check if a chart instance already exists
	if (c_anoms_grid) {
		c_anoms_grid.destroy(); // Destroy the existing comp_temp_chart
	}

	const parent = document.getElementById(docElementId);
	// empty(parent);

	c_anoms_grid = new gridjs.Grid({
		columns: [
			{
				name: "Cuenta",
				formatter: (_, row) =>
					gridjs.html(
						`<a href='https://twitter.com/${row.cells[0].data}' target="_blank">${row.cells[0].data}</a>`,
					),
			},
			"Publicaciones < 60s",
			"Tipo de publicación principal",
			"Total de publicaciones",
			// "HT más usado",
			"Etiqueta más usada",
			// "Frecuencia del HT más usado"
			"Frecuencia de la etiqueta más usada",
		],
		sort: true,
		resizable: true,
		pagination: {
			// limit: 5
			limit: 10,
		},
		// width: 800,
		fixedHeader: true,
		data: row_data,
	}).render(document.getElementById(docElementId));

	return c_anoms_grid;
	// mygrid.updateConfig({
	//     columns: [
	//         {
	//             name: 'Cuenta',
	//             formatter: (_, row) => gridjs.html(`<a href='https://twitter.com/${row.cells[0].data}' target="_blank">'${row.cells[0].data}'</a>`)
	//         },
	//         "Tweet", "Retweet", "Reply", "Quote", "Total"
	//     ],
	//     sort: true,
	//     resizable: true,
	//     pagination: {
	//         limit: 5
	//     },
	//     width: 800,
	//     fixedHeader: true,
	//     data: response
	// }).forceRender();
}
// }}}

// Figura de número de publicaciones por hashtag {{{
function draw_fig_ht_count(chart, response, docElementId) {
	var hashtags_data = response.total;
	// console.log(hashtags_data);

	var hashtags_labels = response.hashtag;
	// console.log(hashtags_labels);

	// Check if a chart instance already exists
	if (hts_pubs_chart) {
		hts_pubs_chart.destroy(); // Destroy the existing comp_temp_chart
	}

	const canvas = document.getElementById(docElementId);
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	hts_pubs_chart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: hashtags_labels,
			datasets: [
				{
					// label: 'Bubble Chart',
					data: hashtags_data, // Use the data prepared earlier
					// backgroundColor: 'rgba(54, 162, 235, 0.6)', // Customize bubble color
				},
			],
		},
		options: {
			indexAxis: "y",
			elements: {
				bar: {
					borderWidth: 2,
				},
			},
			responsive: true,
			scales: {
				x: {
					position: "bottom",
					title: {
						display: true,
						text: "Número de publicaciones",
						font: {
							size: 20,
						},
					},
				},
				y: {
					position: "left",
					title: {
						display: true,
						text: "Etiqueta",
						font: {
							size: 20,
						},
					},
				},
			},
			plugins: {
				legend: {
					position: "right",
					display: false,
				},
				title: {
					display: false,
					text: "Chart.js Horizontal Bar Chart",
				},
			},
		},
	});
	return hts_pubs_chart;
	// return vis_element;
}
// }}}

// Figura scatterplot de hashtags {{{
function visScatterHashtags(data) {
	var xFormData = document.querySelector("#form_x_data_opts");
	var yFormData = document.querySelector("#form_y_data_opts");

	// Get default options
	var xSelectedOption = xFormData.querySelector(
		'input[name="x_data_opts"]:checked',
	).value;
	var ySelectedOption = yFormData.querySelector(
		'input[name="y_data_opts"]:checked',
	).value;

	// Create initial chart
	createScatterChart(data, xSelectedOption, ySelectedOption);

	// Remove existing listeners if any
	xFormData.removeEventListener("change", handleXChange);
	yFormData.removeEventListener("change", handleYChange);

	// Add new listeners
	xFormData.addEventListener("change", handleXChange);
	yFormData.addEventListener("change", handleYChange);

	function handleXChange(event) {
		createScatterChart(
			data,
			event.target.value,
			yFormData.querySelector('input[name="y_data_opts"]:checked').value,
		);
	}

	function handleYChange(event) {
		createScatterChart(
			data,
			xFormData.querySelector('input[name="x_data_opts"]:checked').value,
			event.target.value,
		);
	}
}

function createScatterChart(data, xData, yData) {
	// Destroy existing chart if it exists
	if (window.hts_scatter_chart) {
		window.hts_scatter_chart.destroy();
		window.hts_scatter_chart = null;
	}

  let textLabel = {
    "Retweet": "Reposteo",
    "Quote": "Cita",
    "Reply": "Respuesta",
    "Tweet": "Tweet",
  }

	const canvas = document.getElementById("scatterplot_hashtags");
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Prepare data
	var all_totals = data.map((x) => x["Total"]);
	var maxValue = Math.max(...all_totals);
	var minValue = Math.min(...all_totals);

	var hashtags_data = data.map((x) => ({
		x: x[xData],
		y: x[yData],
		r: linearScale(minValue, maxValue, 8, 30, x["Total"]),
	}));

	var hashtags_labels = data.map((x) => x["Hashtag"]);

	// Create new chart
	window.hts_scatter_chart = new Chart(ctx, {
		type: "bubble",
		data: {
			labels: hashtags_labels,
			datasets: [
				{
					label: "",
					data: hashtags_data,
					backgroundColor: "rgba(54, 162, 235, 0.6)",
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				x: {
					type: "linear",
					position: "bottom",
					title: {
						display: true,
						// text: xData,
						text: textLabel[xData],
						font: { size: 20 },
					},
				},
				y: {
					type: "linear",
					position: "left",
					title: {
						display: true,
						// text: yData,
						text: textLabel[yData],
						font: { size: 20 },
					},
				},
			},
		},
	});
}

function linearScale(originalMin, originalMax, targetMin, targetMax, data) {
	// Calculate the ratio of the value's position within the original range
	const ratio = (data - originalMin) / (originalMax - originalMin);
	// Apply the ratio to the target range and return the scaled value
	const scaledValue = ratio * (targetMax - targetMin) + targetMin;
	return scaledValue;
}
// }}}
