function suffle() {
	cards = [
		{
			realValue: 2,
			displayValue: "2",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 1,
			omegaII: 1,
		},
		{
			realValue: 3,
			displayValue: "3",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 1,
			omegaII: 1,
		},
		{
			realValue: 4,
			displayValue: "4",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 1,
			omegaII: 2,
		},
		{
			realValue: 5,
			displayValue: "5",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 1,
			omegaII: 2,
		},
		{
			realValue: 6,
			displayValue: "6",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 1,
			omegaII: 2,
		},
		{
			realValue: 7,
			displayValue: "7",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 0,
			omegaII: 1,
		},
		{
			realValue: 8,
			displayValue: "8",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 0,
			omegaII: 0,
		},
		{
			realValue: 9,
			displayValue: "9",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: 0,
			omegaII: -1,
		},
		{
			realValue: 10,
			displayValue: "10",
			totalAmount: 4 * deckCount * 4,
			pendingAmount: 4 * deckCount * 4,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: -1,
			omegaII: -2,
		},
		{
			realValue: 11,
			displayValue: "A",
			totalAmount: 4 * deckCount,
			pendingAmount: 4 * deckCount,
			completedAmount: 0,
			playerRate: 0,
			dealerRate: 0,
			hilo: -1,
			omegaII: 0,
		},
	];

	pendingCardCount = deckCount * 52;
	
	hiloNumber = 0;
	hiloValue = 0;

	omegaIINumber = 0;
	omegaIIValue = 0;
	
	newTour();
}

function newTour() {
	dealerCards = [];
	playerCards = [];
	otherCards = [];
}

function getCardByRealValue(realValue) {
	var card = cards.find(x => x.realValue == realValue);
	if (typeof card == "undefined") {
		alert(SLC_MESSAGE);
		return false;
	}
	return card;
}

function getDealerTotal() {
	var total = 0;
	var cnt = 0;
	for (var i = 0; i < dealerCards.length; i++) {
		var value = dealerCards[i].realValue;
		if (value == 11) {
			cnt++;
			if (cnt > 1) {
				value = 1;
			}
		}
		total += value;
	}
	return total;
}

function getDealerSoftTotal() {
	var total = 0;
	for (var i = 0; i < dealerCards.length; i++) {
		total += dealerCards[i].realValue == 11 ? 1 : dealerCards[i].realValue;
	}
	return total;
}

function getPlayerTotal() {
	var total = 0;
	var cnt = 0;
	for (var i = 0; i < playerCards.length; i++) {
		var value = playerCards[i].realValue;
		if (value == 11) {
			cnt++;
			if (cnt > 1) {
				value = 1;
			}
		}
		total += value;
	}
	return total;
}

function getPlayerSoftTotal() {
	var total = 0;
	for (var i = 0; i < playerCards.length; i++) {
		total += playerCards[i].realValue == 11 ? 1 : playerCards[i].realValue;
	}
	return total;
}

function getPlayerRiskFor21() {
	var playerTotal = getPlayerSoftTotal();
	var limit = 21 - playerTotal;
	if (limit >= 10) {
		return 0;
	}
	var pendingTotal = 0;
	var whiteTotal = 0;
	for (var i = 0; i < cards.length; i++) {
		var value = cards[i].realValue == 11 ? 1 : cards[i].realValue;
		if (value <= limit) {
			whiteTotal += cards[i].pendingAmount;
		}
		pendingTotal += cards[i].pendingAmount;
	}
	var risk = 100 - whiteTotal / pendingTotal * 100;
	return risk.toFixed(4);
}

function toPlayerCards(card) {
	playerCards.push(card);
	toCompletedCards(card);
}

function toDealerCards(card) {
	dealerCards.push(card);
	toCompletedCards(card);
}

function toOtherCards(card) {
	otherCards.push(card);
	toCompletedCards(card);
}

function fromPlayerCards(card) {
	var arr = [];
	var finded = false;
	for (var i = 0; i < playerCards.length; i++) {
		if (playerCards[i].realValue == card.realValue && ! finded) {
			finded = true;
		} else {
			arr.push(playerCards[i]);
		}
	}
	playerCards = arr;
	toPendingCards(card);
}

function fromDealerCards(card) {
	var arr = [];
	var finded = false;
	for (var i = 0; i < dealerCards.length; i++) {
		if (dealerCards[i].realValue == card.realValue && ! finded) {
			finded = true;
		} else {
			arr.push(dealerCards[i]);
		}
	}
	dealerCards = arr;
	toPendingCards(card);
}

function fromOtherCards(card) {
	var arr = [];
	var finded = 0;
	for (var i = 0; i < otherCards.length; i++) {
		if (otherCards[i].realValue == card.realValue && ! finded) {
			finded = true;
		} else {
			arr.push(otherCards[i]);
		}
	}
	otherCards = arr;
	toPendingCards(card);
}

function toCompletedCards(card) {
	if (card.pendingAmount > 0) {
		pendingCardCount--;
		card.pendingAmount--;
		card.completedAmount++;
		hiloNumber += card.hilo;
		hiloValue = getRateByNumber(hiloNumber);
		omegaIINumber += card.omegaII;
		omegaIIValue = getRateByNumber(omegaIINumber);
	}
}

function toPendingCards(card) {
	if (card.completedAmount > 0) {
		pendingCardCount++;
		card.pendingAmount++;
		card.completedAmount--;
		hiloNumber -= card.hilo;
		hiloValue = getRateByNumber(hiloNumber);
		omegaIINumber -= card.omegaII;
		omegaIIValue = getRateByNumber(omegaIINumber);
	}
}

function getRateByNumber(number) {
	var rate = number / (pendingCardCount / 52);
	return rate.toFixed(4);
}
