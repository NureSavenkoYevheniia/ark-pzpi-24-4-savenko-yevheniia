console.log("=== Перевірка роботи прикладів коду ==-\n");

// В.1 ОФОРМЛЕННЯ ФУНКЦІЙ ТА МЕТОДІВ 
function calculateDiscount(price, rate) {
  if (price < 0 || rate < 0) {
    throw new Error("Invalid value");
  }
  return price * (1.0 - rate);
}

console.log("1. calculateDiscount(100, 0.1) =", calculateDiscount(100, 0.1));


// В.2 ПРИКЛАД ПРОГРАМНОГО КОДУ ДО РЕФАКТОРИНҐУ 
function f(a, b) {
  var x = a * b; // multiply
  if (x > 100) { return x - 10; }
  else { return x; }
}

console.log("2. f(12, 10) =", f(12, 10)); 


// В.3 ПРИКЛАД ПРОГРАМНОГО КОДУ ПІСЛЯ РЕФАКТОРИНҐУ 
const THRESHOLD = 100;
const DISCOUNT = 10;

function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total > THRESHOLD ? total - DISCOUNT : total;
}

console.log("3. calculateTotal(50, 3) =", calculateTotal(50, 3)); 


// В.4 ОРГАНІЗАЦІЯ ФАЙЛОВОЇ СТРУКТУРИ ТА ІМПОРТИ 
import { CONFIG } from './config.js';
import { UserService } from './services/user.js';

import express from 'express';

export class OrderManager {
// ...
}


// В.5 СИНТАКСИЧНІ ПРАВИЛА ТА ФОРМАТУВАННЯ 
function checkPermission(userRole, isActive) {
  if (
    userRole === "admin" &&
    isActive
  ) {
    return true;
  }
  return false;
}

console.log("5. checkPermission('admin', true) =", checkPermission('admin', true));


// В.6 ДОКУМЕНТУВАННЯ ТА КОМЕНТАРІ JSDOC 
/**
 * Додає два цілих числа.
 * @param {number} a Перший доданок.
 * @param {number} b Другий доданок.
 * @returns {number} Сума двох чисел.
 */
function addNumbers(a, b) {
  return a + b;
}

console.log("6. addNumbers(5, 7) =", addNumbers(5, 7));


// В.7 МОДУЛЬНЕ ТЕСТУВАННЯ 
function calculateDiscount(price, rate) {
    return price - (price * rate);
}

test('calculateDiscount returns correct value', () => {
    const price = 100.0;
    const rate = 0.1;
    const result = calculateDiscount(price, rate);
    expect(result).toBe(90.0);
});

console.log("\n7. Запуск юніт-тесту (TDD):");
const testPrice = 100.0;
const testRate = 0.1;
const manualResult = calculateDiscount(testPrice, testRate);

if (manualResult === 90.0) {
    console.log("   ✅ Тест 'calculateDiscount returns correct value' пройдено успішно!");
} else {
    console.log("   ❌ Тест не пройдено. Очікувалося 90, отримано:", manualResult);
}
