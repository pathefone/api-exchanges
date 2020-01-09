var from = "BTC";
var to = "EUR";
var api_key = "https://min-api.cryptocompare.com/data/top/exchanges?fsym=" + from + "&tsym=" + to + "&limit=10&3f6f1b26c0a67b3e8019e8137cdbc6e0eb80db18841a8aacf2d60f7edca52921";
var test = 0;

 $.getJSON(api_key, function(data) {
	console.log(data);
	
	for(let i = 0; i<=9; i++) {
	var exchange = data.Data[i].exchange;
	var fromSymbol = data.Data[i].fromSymbol;
	var toSymbol = data.Data[i].toSymbol;
	var volume24h = data.Data[i].volume24h;
	
	var test = document.createElement("p");
	test.id = 13;
	test.innerHTML = "Exchange: " + exchange + "  From: " + fromSymbol + "  To: " + toSymbol + "  Volume24h: Ƀ" + volume24h;
	document.body.appendChild(test);
	}
});


	
	
	
	$(document).ready(function() {
		$("#submit_button").click(function(){
			var from_value = document.getElementById("from").value;
			var to_value = document.getElementById("to").value;
			$("p").remove();
			from = from_value;
			to = to_value;
			var api_key = "https://min-api.cryptocompare.com/data/top/exchanges?fsym=" + from + "&tsym=" + to + "&limit=10&3f6f1b26c0a67b3e8019e8137cdbc6e0eb80db18841a8aacf2d60f7edca52921";

	$.getJSON(api_key, function(data) {
		console.log(data);
	
		for(let i = 0; i<=9; i++) {
		var exchange = data.Data[i].exchange;
		var fromSymbol = data.Data[i].fromSymbol;
		var toSymbol = data.Data[i].toSymbol;
		var volume24h = data.Data[i].volume24h;
	
		var test = document.createElement("p");
		test.id = 13;
		test.innerHTML = "Exchange: " + exchange + "  From: " + fromSymbol + "  To: " + toSymbol + "  Volume24h: Ƀ" + volume24h;
		document.body.appendChild(test);
	}
		});
	});
});
	
	
	
	












