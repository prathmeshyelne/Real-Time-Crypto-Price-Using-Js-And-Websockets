ws=new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
price=0;
old_price=0;
ws.onmessage=(event)=>{
	data=JSON.parse(event.data);
	price=parseFloat(data.p).toFixed(2);
	if(price>old_price){
		trade.style.color="green";
	}else if(price==old_price){
		trade.style.color="black";
	}else{
		trade.style.color="red";
	}
	old_price=price;	
	trade.innerText=parseFloat(data.p).toFixed(2);
}