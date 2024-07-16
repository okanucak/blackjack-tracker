function resetPendingCards() {
	pendingCards = {
		2: 4 * DECK_COUNT,
		3: 4 * DECK_COUNT,
		4: 4 * DECK_COUNT,
		5: 4 * DECK_COUNT,
		6: 4 * DECK_COUNT,
		7: 4 * DECK_COUNT,
		8: 4 * DECK_COUNT,
		9: 4 * DECK_COUNT,
		10: 4 * DECK_COUNT * 4,
		11: 4 * DECK_COUNT,
	};
}

function resetCompletedCards() {
	completedCards = {
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
	};
}

function resetMyCards() {
	myCards = [];
}

function resetCaseCards() {
	caseCards = [];
}

function resetOtherCards() {
	otherCards = [];
}

function newDeck() {
	resetPendingCards();
	resetCompletedCards();
	resetMyCards();
	resetCaseCards();
	resetOtherCards();
}

function newTour() {
	resetMyCards();
	resetCaseCards();
	resetOtherCards();
}

function getCaseTotal() {
	var total = 0;
	var cnt = 0;
	for (var i = 0; i < caseCards.length; i++) {
		var value = caseCards[i];
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

function getCaseSoftTotal() {
	var total = 0;
	for (var i = 0; i < caseCards.length; i++) {
		total += caseCards[i] == 11 ? 1 : caseCards[i];
	}
	return total;
}

function getMyTotal() {
	var total = 0;
	var cnt = 0;
	for (var i = 0; i < myCards.length; i++) {
		var value = myCards[i];
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

function getMySoftTotal() {
	var total = 0;
	for (var i = 0; i < myCards.length; i++) {
		total += myCards[i] == 11 ? 1 : myCards[i];
	}
	return total;
}

function getMyRisk() {
	var myTotal = getMySoftTotal();
	var limit = 21 - myTotal;
	if (limit >= 10) {
		return 0;
	}
	var pendingTotal = 0;
	var whiteTotal = 0;
	for (const [key, value] of Object.entries(pendingCards)) {
		if (key <= limit) {
			whiteTotal += value;
		}
		pendingTotal += value;
	}
	var risk = 100 - Math.round(whiteTotal / pendingTotal * 100);
	return risk;
}

function toMyCards(value) {
	myCards.push(parseInt(value));
	toCompletedCards(value);
}

function toCaseCards(value) {
	caseCards.push(parseInt(value));
	toCompletedCards(value);
}

function toOtherCards(value) {
	otherCards.push(parseInt(value));
	toCompletedCards(value);
}

function fromMyCards(value) {
	var arr = [];
	var cnt = 0;
	for (var i = 0; i < myCards.length; i++) {
		if (myCards[i] == value && cnt == 0) {
			cnt++;
		} else {
			arr.push(myCards[i]);
		}
	}
	myCards = arr;
	toPendingCards(value);
}

function fromCaseCards(value) {
	var arr = [];
	var cnt = 0;
	for (var i = 0; i < caseCards.length; i++) {
		if (caseCards[i] == value && cnt == 0) {
			cnt++;
		} else {
			arr.push(caseCards[i]);
		}
	}
	caseCards = arr;
	toPendingCards(value);
}

function fromOtherCards(value) {
	var arr = [];
	var cnt = 0;
	for (var i = 0; i < otherCards.length; i++) {
		if (otherCards[i] == value && cnt == 0) {
			cnt++;
		} else {
			arr.push(otherCards[i]);
		}
	}
	otherCards = arr;
	toPendingCards(value);
}

function toCompletedCards(value) {
	if (pendingCards[value] > 0) {
		pendingCards[value]--;
		completedCards[value]++;
		if (value == 10 || value == 11) {
			hiloNumber--;
		} else if (value == 2 || value == 3 || value == 4 || value == 5 || value == 6) {
			hiloNumber++;
		}
	}
}

function toPendingCards(value) {
	if (completedCards[value] > 0) {
		pendingCards[value]++;
		completedCards[value]--;
		if (value == 10 || value == 11) {
			hiloNumber++;
		} else if (value == 2 || value == 3 || value == 4 || value == 5 || value == 6) {
			hiloNumber--;
		}
	}
}

