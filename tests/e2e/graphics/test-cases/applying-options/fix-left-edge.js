function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 20; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addLineSeries();
	mainSeries.setData(generateData());

	chart.timeScale().applyOptions({ fixLeftEdge: true });

	return new Promise(resolve => {
		setTimeout(() => resolve(), 1000);
	});
}
