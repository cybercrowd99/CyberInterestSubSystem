// FILE: interest-handoff.js
// CYBERINTERESTSUBSYSTEM
// Interest Handoff Record
//
// One rock.
// One object.
// One movement.
// One function.
// One entrance.
// One exit.
// One actual end.
//
// PURPOSE:
//
// Prepare one established CyberInterest
// relationship for bounded downstream handoff.
//
// This file answers only:
//
// "What declared Interest facts are ready
// to leave CyberInterest?"
//
// CyberInterest owns Interest.
//
// CyberInterest does NOT own what another
// organ does with the declared Interest facts.
//
// HANDOFF != ROUTING
//
// HANDOFF != ANALYTICS
//
// HANDOFF != VALUE
//
// HANDOFF != ADVERTISING
//
// HANDOFF != PAYMENT
//
// HANDOFF != TRANSACTION
//
// HANDOFF != LEDGER WRITE
//
// HANDOFF != AUTHORITY
//
// This file does NOT:
//
// - choose a destination organ
// - calculate analytics
// - calculate frequency
// - calculate economic value
// - calculate money
// - determine market value
// - select advertisements
// - run AdWorm
// - execute payments
// - move funds
// - create transactions
// - write CyberLedger
// - grant permission
// - grant authority
// - infer hidden intent
// - create identity
// - create consent
// - rank people
// - rank businesses
//
// DECLARED FACTS ONLY:
//
// The handoff may preserve:
//
// - interest relationship reference
// - subject reference
// - object reference
// - interest type
// - occurrence count
// - repetition state
// - source reference
// - context reference
// - economic relationship reference
// - payer reference
// - earner reference
//
// No missing fact is invented.
//
// CyberInterest prepares.
//
// The receiving organ decides its own job.
//

(function () {
  "use strict";

  const ORGAN = "CyberInterestSubSystem";
  const RECORD_TYPE = "CYBER_INTEREST_HANDOFF";

  function normalizeText(value) {
    return typeof value === "string"
      ? value.trim()
      : "";
  }

  function normalizeCount(value) {
    if (
      typeof value === "number" &&
      Number.isInteger(value) &&
      value > 0
    ) {
      return value;
    }

    return 1;
  }

  function createInterestHandoff(input) {
    if (!input || typeof input !== "object") {
      return {
        ok: false,
        handoff: null,
        reason: "INTEREST_HANDOFF_INPUT_REQUIRED"
      };
    }

    const interestRelationshipRef =
      normalizeText(input.interestRelationshipRef);

    const subjectRef =
      normalizeText(input.subjectRef);

    const objectRef =
      normalizeText(input.objectRef);

    const interestType =
      normalizeText(input.interestType);

    const sourceRef =
      normalizeText(input.sourceRef);

    const contextRef =
      normalizeText(input.contextRef);

    const economicRelationshipRef =
      normalizeText(input.economicRelationshipRef);

    const payerRef =
      normalizeText(input.payerRef);

    const earnerRef =
      normalizeText(input.earnerRef);

    if (!interestRelationshipRef) {
      return {
        ok: false,
        handoff: null,
        reason: "INTEREST_HANDOFF_RELATIONSHIP_REF_REQUIRED"
      };
    }

    if (!subjectRef) {
      return {
        ok: false,
        handoff: null,
        reason: "INTEREST_HANDOFF_SUBJECT_REQUIRED"
      };
    }

    if (!objectRef) {
      return {
        ok: false,
        handoff: null,
        reason: "INTEREST_HANDOFF_OBJECT_REQUIRED"
      };
    }

    if (!interestType) {
      return {
        ok: false,
        handoff: null,
        reason: "INTEREST_HANDOFF_TYPE_REQUIRED"
      };
    }

    const occurrenceCount =
      normalizeCount(input.occurrenceCount);

    const repeated =
      occurrenceCount > 1;

    const handoff = Object.freeze({
      recordType: RECORD_TYPE,
      organ: ORGAN,

      interestRelationshipRef,

      subjectRef,
      objectRef,
      interestType,

      occurrenceCount,
      repeated,

      sourceRef: sourceRef || null,
      contextRef: contextRef || null,

      economicRelationshipRef:
        economicRelationshipRef || null,

      payerRef: payerRef || null,
      earnerRef: earnerRef || null,

      analyticsPerformed: false,
      valueDeclared: false,
      advertisementSelected: false,
      paymentExecuted: false,
      transactionCreated: false,
      ledgerWritten: false,
      authorityDeclared: false,

      handoffReady: true
    });

    return {
      ok: true,
      handoff,
      reason: "INTEREST_HANDOFF_READY"
    };
  }

  if (
    typeof module !== "undefined" &&
    module.exports
  ) {
    module.exports = {
      createInterestHandoff
    };
  }

  if (typeof window !== "undefined") {
    window.CyberInterestHandoff = {
      createInterestHandoff
    };
  }
})();
