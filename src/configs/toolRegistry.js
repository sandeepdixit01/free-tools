/**
 * Tool Registry - DEPRECATED
 *
 * This file is kept for backward compatibility only.
 * All new code should import from '../data/tools.js' instead.
 *
 * MIGRATION PATH:
 * - Old: import { toolRegistry } from './configs/toolRegistry'
 * - New: import { tools, getActiveTools } from './data/tools'
 *
 * This file simply re-exports from the new central data source.
 */

import {
  tools,
  getActiveTools,
  getToolsByCategory as getToolsByCategoryNew,
  getToolById as getToolByIdNew,
  getCategoriesWithCounts as getCategoriesWithCountsNew
} from '../data/tools'

/**
 * @deprecated Use 'tools' from '../data/tools' instead
 * For backward compatibility, this returns ALL tools (including inactive)
 */
export const toolRegistry = tools

/**
 * @deprecated Use getToolsByCategory(category, activeOnly) from '../data/tools' instead
 * For backward compatibility, this returns ALL tools in category (including inactive)
 */
export const getToolsByCategory = (category) => {
  return getToolsByCategoryNew(category, false) // Return all tools, not just active
}

/**
 * @deprecated Use getToolById from '../data/tools' instead
 */
export const getToolById = (id) => {
  return getToolByIdNew(id)
}

/**
 * @deprecated Use getCategoriesWithCounts from '../data/tools' instead
 */
export const getCategoriesWithCounts = () => {
  return getCategoriesWithCountsNew(false) // Count all tools, not just active
}

