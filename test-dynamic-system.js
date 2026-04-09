/**
 * Test Script for Dynamic Tools System
 * Run with: node test-dynamic-system.js
 * 
 * This script validates that the dynamic tools system is working correctly
 */

import {
  tools,
  getActiveTools,
  getPopularTools,
  getFeaturedTools,
  getRandomTools,
  getToolsByCategory,
  getToolById,
  getCategoriesWithCounts,
  isToolActive
} from './src/data/tools.js'

console.log('🧪 Testing Dynamic Tools System\n')
console.log('=' .repeat(60))

// Test 1: Total Tools
console.log('\n📊 Test 1: Total Tools')
console.log(`Total tools in system: ${tools.length}`)
console.log(`Active tools: ${getActiveTools().length}`)
console.log(`Inactive tools: ${tools.filter(t => !t.active).length}`)

// Test 2: Active Tools Only
console.log('\n✅ Test 2: Active Tools')
const activeTools = getActiveTools()
console.log(`Active tools count: ${activeTools.length}`)
activeTools.forEach(tool => {
  console.log(`  - ${tool.id} (${tool.category})`)
})

// Test 3: Inactive Tools Should Be Hidden
console.log('\n❌ Test 3: Inactive Tools (Should NOT appear on pages)')
const inactiveTools = tools.filter(t => !t.active)
console.log(`Inactive tools count: ${inactiveTools.length}`)
inactiveTools.forEach(tool => {
  console.log(`  - ${tool.id} (${tool.category}) - HIDDEN`)
})

// Test 4: Popular Tools
console.log('\n🔥 Test 4: Popular Tools (Sorted by Usage)')
const popularTools = getPopularTools(6)
console.log(`Popular tools (top 6):`)
popularTools.forEach((tool, index) => {
  console.log(`  ${index + 1}. ${tool.id} - Usage: ${tool.usageCount}`)
})

// Test 5: Featured Tools
console.log('\n⭐ Test 5: Featured Tools')
const featuredTools = getFeaturedTools(4)
console.log(`Featured tools count: ${featuredTools.length}`)
featuredTools.forEach(tool => {
  console.log(`  - ${tool.id} (featured: ${tool.featured})`)
})

// Test 6: Random Tools
console.log('\n🎲 Test 6: Random Tools')
const randomTools = getRandomTools(3)
console.log(`Random tools (3):`)
randomTools.forEach(tool => {
  console.log(`  - ${tool.id}`)
})

// Test 7: Tools by Category
console.log('\n📁 Test 7: Tools by Category')
const categories = ['image', 'pdf', 'text', 'developer']
categories.forEach(category => {
  const categoryTools = getToolsByCategory(category, true)
  console.log(`  ${category}: ${categoryTools.length} active tools`)
  categoryTools.forEach(tool => {
    console.log(`    - ${tool.id}`)
  })
})

// Test 8: Category Counts
console.log('\n📈 Test 8: Category Counts')
const categoryCounts = getCategoriesWithCounts(true)
categoryCounts.forEach(cat => {
  console.log(`  ${cat.id}: ${cat.count} active / ${cat.totalCount} total`)
})

// Test 9: Get Tool by ID
console.log('\n🔍 Test 9: Get Tool by ID')
const testToolId = 'image-resizer'
const tool = getToolById(testToolId)
if (tool) {
  console.log(`  Found: ${tool.id}`)
  console.log(`  Name (EN): ${tool.name.en}`)
  console.log(`  Active: ${tool.active}`)
  console.log(`  Featured: ${tool.featured}`)
  console.log(`  Usage Count: ${tool.usageCount}`)
} else {
  console.log(`  ❌ Tool not found: ${testToolId}`)
}

// Test 10: Check Tool Active Status
console.log('\n🔒 Test 10: Check Tool Active Status')
const testTools = ['image-resizer', 'image-compressor', 'word-counter']
testTools.forEach(toolId => {
  const isActive = isToolActive(toolId)
  console.log(`  ${toolId}: ${isActive ? '✅ Active' : '❌ Inactive'}`)
})

// Test 11: Validation - All Active Tools Have Config
console.log('\n✔️  Test 11: Validation - Active Tools Must Have Config')
const activeToolsWithoutConfig = getActiveTools().filter(t => !t.config)
if (activeToolsWithoutConfig.length === 0) {
  console.log('  ✅ All active tools have config')
} else {
  console.log('  ❌ Active tools without config:')
  activeToolsWithoutConfig.forEach(tool => {
    console.log(`    - ${tool.id}`)
  })
}

// Test 12: Validation - All Tools Have Required Properties
console.log('\n✔️  Test 12: Validation - Required Properties')
const requiredProps = ['id', 'name', 'description', 'category', 'route', 'icon', 'active', 'featured', 'usageCount']
let allValid = true
tools.forEach(tool => {
  const missingProps = requiredProps.filter(prop => !(prop in tool))
  if (missingProps.length > 0) {
    console.log(`  ❌ ${tool.id} missing: ${missingProps.join(', ')}`)
    allValid = false
  }
})
if (allValid) {
  console.log('  ✅ All tools have required properties')
}

// Test 13: Validation - Bilingual Content
console.log('\n✔️  Test 13: Validation - Bilingual Content')
let allBilingual = true
tools.forEach(tool => {
  if (!tool.name.en || !tool.name.hi) {
    console.log(`  ❌ ${tool.id} missing bilingual name`)
    allBilingual = false
  }
  if (!tool.description.en || !tool.description.hi) {
    console.log(`  ❌ ${tool.id} missing bilingual description`)
    allBilingual = false
  }
})
if (allBilingual) {
  console.log('  ✅ All tools have bilingual content (EN + HI)')
}

// Test 14: Homepage Tools
console.log('\n🏠 Test 14: Homepage Tools')
console.log(`  Popular Tools (8): ${getPopularTools(8).length}`)
console.log(`  Featured Tools (4): ${getFeaturedTools(4).length}`)
console.log(`  Random Tools (3): ${getRandomTools(3).length}`)

// Summary
console.log('\n' + '='.repeat(60))
console.log('📋 SUMMARY')
console.log('='.repeat(60))
console.log(`Total Tools: ${tools.length}`)
console.log(`Active Tools: ${getActiveTools().length}`)
console.log(`Inactive Tools: ${tools.filter(t => !t.active).length}`)
console.log(`Featured Tools: ${tools.filter(t => t.featured && t.active).length}`)
console.log(`Tools with Usage > 0: ${tools.filter(t => t.usageCount > 0).length}`)
console.log('\n✅ Dynamic Tools System Test Complete!')

// Made with Bob
