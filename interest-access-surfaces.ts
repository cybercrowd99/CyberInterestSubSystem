// FILE ACTION: CREATE NEW FILE
// FILE: interest-access-surfaces.ts
// REPO: cybercrowd99/CyberInterestSubSystem
// COMMIT: Add CyberInterest access surface registry
// CONTEXT: Declare the structural surfaces CyberInterest exposes.
// No execution, routing, analytics, value, advertising, payment,
// authority, or ownership transfer.

/**
 * INTEREST — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by INTEREST.
 *
 * Ownership boundary:
 *
 *   INTEREST
 *    │
 *    ├── INTEREST-RELATIONSHIP
 *    ├── INTEREST-ECONOMIC-RELATIONSHIP
 *    ├── INTEREST-CONTINUITY
 *    └── INTEREST-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - create interest relationships
 * - create economic relationships
 * - perform analytics
 * - infer intent
 * - calculate value
 * - calculate money
 * - select advertisements
 * - execute payments
 * - create transactions
 * - write ledger records
 * - authorize actions
 * - transfer ownership
 *
 * It only declares the INTEREST access-surface structure.
 */

export default {
  interest: {
    relationship: "INTEREST-RELATIONSHIP",
    economicRelationship: "INTEREST-ECONOMIC-RELATIONSHIP",
    continuity: "INTEREST-CONTINUITY",
    evidence: "INTEREST-EVIDENCE",
  },
};
