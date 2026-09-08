// FILE: interest-relationship.js
// CYBERINTERESTSUBSYSTEM
// Interest Relationship Record
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
// Receive one declared interest event
// and express it as one bounded
// interest relationship record.
//
// This file answers only:
//
// "What declared interest relationship
// occurred?"
//
// INTEREST:
//
// Interest may represent:
//
// - attention
// - selection
// - return
// - repetition
// - request
// - engagement
// - declared preference
//
// Interest is evidence of relationship.
//
// Interest is NOT:
//
// - payment
// - value
// - ownership
// - authority
// - permission
// - ranking
// - advertising
// - analytics
// - conversion
// - identity proof
//
// This file does NOT:
//
// - calculate money
// - calculate economic value
// - run ads
// - choose ads
// - rank people
// - rank businesses
// - authorize movement
// - grant permission
// - create identity
// - write a ledger
// - perform analytics
// - infer hidden intent
// - track location
// - create behavioral profiles
//
// DECLARED INPUT ONLY:
//
// The relationship must be supplied
// by an upstream source.
//
// This organ does not invent interest.
//
// FOUND != INTEREST
//
// VIEWED != PURCHASED
//
// REPEATED != AUTHORIZED
//
// ATTENTION != VALUE
//
// INTEREST != CONSENT TO MONETIZE
//

(function () {
  "use strict";

  const ORGAN = "CyberInterestSubSystem";
  const RECORD_TYPE = "CYBER_INTEREST_RELATIONSHIP";

  function normalizeText(value) {
    return typeof value === "string"
      ? value.trim()
      : "";
  }

  function normalizePositiveInteger(value, fallback) {
    if (
      typeof value === "number" &&
      Number.isInteger(value) &&
      value > 0
    ) {
      return value;
    }

    return fallback;
  }

  function createInterestRelationship(input) {
    if (!input || typeof input !== "object") {
      return {
        ok: false,
        relationship: null,
        reason: "INTEREST_INPUT_REQUIRED"
      };
    }

    const subjectRef = normalizeText(input.subjectRef);
    const objectRef = normalizeText(input.objectRef);
    const interestType = normalizeText(input.interestType);
    const sourceRef = normalizeText(input.sourceRef);
    const contextRef = normalizeText(input.contextRef);

    if (!subjectRef) {
      return {
        ok: false,
        relationship: null,
        reason: "INTEREST_SUBJECT_REQUIRED"
      };
    }

    if (!objectRef) {
      return {
        ok: false,
        relationship: null,
        reason: "INTEREST_OBJECT_REQUIRED"
      };
    }

    if (!interestType) {
      return {
        ok: false,
        relationship: null,
        reason: "INTEREST_TYPE_REQUIRED"
      };
    }

    const occurrenceCount =
      normalizePositiveInteger(
        input.occurrenceCount,
        1
      );

    const repeated = occurrenceCount > 1;

    const relationship = Object.freeze({
      recordType: RECORD_TYPE,
      organ: ORGAN,

      subjectRef,
      objectRef,
      interestType,

      sourceRef: sourceRef || null,
      contextRef: contextRef || null,

      occurrenceCount,
      repeated,

      economicValueDeclared: false,
      paymentDeclared: false,
      authorityDeclared: false,
      permissionDeclared: false,
      monetizationConsentDeclared: false,

      relationshipDeclared: true
    });

    return {
      ok: true,
      relationship,
      reason: "INTEREST_RELATIONSHIP_RECORDED"
    };
  }

  if (
    typeof module !== "undefined" &&
    module.exports
  ) {
    module.exports = {
      createInterestRelationship
    };
  }

  if (typeof window !== "undefined") {
    window.CyberInterestRelationship = {
      createInterestRelationship
    };
  }
})();
