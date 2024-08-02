/**
 * Defines
 */

// Constants
const DECK_COUNT = 8;
const HIGHT = "hight";
const LOW = "low";

// Variables
var dealerCards = [];
var playerCards = [];
var otherCards = [];
var pendingCardCount = DECK_COUNT * 52;
var hiloNumber = 0;

// Card List
var cards = [
    {
        realValue: 2,
        displayValue: "2",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: LOW,
    },
    {
        realValue: 3,
        displayValue: "3",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: LOW,
    },
    {
        realValue: 4,
        displayValue: "4",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: LOW,
    },
    {
        realValue: 5,
        displayValue: "5",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: LOW,
    },
    {
        realValue: 6,
        displayValue: "6",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: LOW,
    },
    {
        realValue: 7,
        displayValue: "7",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: null,
    },
    {
        realValue: 8,
        displayValue: "8",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: null,
    },
    {
        realValue: 9,
        displayValue: "9",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: null,
    },
    {
        realValue: 10,
        displayValue: "10",
        totalAmount: 4 * DECK_COUNT * 4,
        pendingAmount: 4 * DECK_COUNT * 4,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: HIGHT,
    },
    {
        realValue: 11,
        displayValue: "A",
        totalAmount: 4 * DECK_COUNT,
        pendingAmount: 4 * DECK_COUNT,
        completedAmount: 0,
        playerRate: 0,
        dealerRate: 0,
        hilo: HIGHT,
    },
];