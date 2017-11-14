var laptopOffers = { HackerBook: 777444, RankBook: 3, TheBook: 777, BestBook: 44771 };

function findOffer(value){
	Object.keys(laptopOffers).forEach(function(b){
		if(laptopOffers[b]==value){
			console.log(b);
		}
	})
}

function luckyPurchase(offers) {
    var fours, sevens;
    var offers = [];
    Object.keys(laptopOffers).forEach(function(a) {
        fours = (laptopOffers[a].toString()).match(new RegExp("4", "g")) ? (laptopOffers[a].toString()).match(new RegExp("4", "g")).length : 0;
        sevens = (laptopOffers[a].toString()).match(new RegExp("7", "g")) ? (laptopOffers[a].toString()).match(new RegExp("7", "g")).length : 0;

        if (fours ==0 || sevens==0 || (fours+sevens)!=(laptopOffers[a].toString()).length ) {
            delete laptopOffers[a];
        }else{
        	offers.push(laptopOffers[a]);
        }
    });
    offers.sort();
    if (offers.length > 0) {
        findOffer(offers[0]);
    } else {
        console.log("-1");
    }
}


luckyPurchase(laptopOffers);

