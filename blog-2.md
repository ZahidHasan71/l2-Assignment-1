# Staying DRY with TypeScript Utility Types: Pick and Omit

## Introduction
In large-scale TypeScript projects, maintaining clean and reusable code is a top priority. The **DRY (Don't Repeat Yourself)** principle suggests that every piece of knowledge must have a single, unambiguous representation within a system. TypeScript’s `Pick` and `Omit` utility types are perfect tools for upholding this principle by creating specialized "slices" of a master interface.

## 1. Using Pick<T, K> for Selection
The `Pick` utility creates a new type by selecting a specific set of properties from an existing interface. Instead of manually re-declaring a new interface for a small component, you can "pick" only the necessary fields.

**Why it prevents duplication:** 
If you update a property type in the master interface, all types created using `Pick` will automatically reflect that change.