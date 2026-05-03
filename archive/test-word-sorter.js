/**
 * Test script for Word Sorter Tool
 */

import { WordSorterTool } from './src/tools/WordSorterTool.js';

console.log('🧪 Testing Word Sorter Tool...\n');

// Test data
const testText = `Zebra
Apple
Mango
banana
Cherry
apple`;

console.log('📝 Input text:');
console.log(testText);
console.log('\n' + '='.repeat(50) + '\n');

// Test 1: Ascending sort (case-insensitive)
console.log('Test 1: Ascending sort (case-insensitive)');
const tool1 = new WordSorterTool();
const result1 = tool1.process(testText, {
  order: 'asc',
  caseSensitive: false,
  trimLines: true,
  removeEmptyLines: true
});
console.log('Result:', result1.result);
console.log('Stats:', result1.stats);
console.log('\n' + '='.repeat(50) + '\n');

// Test 2: Descending sort (case-sensitive)
console.log('Test 2: Descending sort (case-sensitive)');
const tool2 = new WordSorterTool();
const result2 = tool2.process(testText, {
  order: 'desc',
  caseSensitive: true,
  trimLines: true,
  removeEmptyLines: true
});
console.log('Result:', result2.result);
console.log('Stats:', result2.stats);
console.log('\n' + '='.repeat(50) + '\n');

// Test 3: With empty lines
console.log('Test 3: With empty lines preserved');
const testTextWithEmpty = `Zebra

Apple

Mango`;
const tool3 = new WordSorterTool();
const result3 = tool3.process(testTextWithEmpty, {
  order: 'asc',
  caseSensitive: false,
  trimLines: true,
  removeEmptyLines: false
});
console.log('Result:', result3.result);
console.log('Stats:', result3.stats);

console.log('\n✅ All tests completed!');

