// FILE: interest-economic-relationship.js
// CYBERINTERESTSUBSYSTEM
// Interest Economic Relationship Record
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
// Express the declared economic relationship
// surrounding one established interest relationship.
//
// This file answers only:
//
// "Who is declared as paying around this interest,
// and who is declared as earning around this interest?"
//
// THE SEE-SAW:
//
// One side may pay because interest exists.
//
// One side may earn because interest exists.
//
// CyberInterest records that declared relationship.
//
// It does NOT determine:
//
// - how much money
// - whether payment should occur
// - whether earning is deserved
// - whether interest has economic value
// - whether an advertisement should run
// - whether conversion occurred
// - whether a market transaction exists
//
// INTEREST != MONEY
//
// INTEREST != PAYMENT
//
// INTEREST != VALUE
//
// INTEREST != CONVERSION
//
// PAYING != AUTHORITY
//
// EARNING != OWNERSHIP
//
// RELATIONSHIP != TRANSACTION
//
// DECLARATION != EXECUTION
//
// This file does NOT:
//
// - calculate money
// - calculate interest rates
// - calculate economic value
// - calculate revenue
// - calculate commissions
// - calculate yield
// - execute payments
// - move funds
// - select advertisements
// - run AdWorm
// - perform analytics
// - rank participants
// - infer hidden intent
// - authorize monetization
// - create consent
// - write CyberLedger
// - create CyberValue
// - create CyberMarket transactions
// - create identity
//
// DECLARED INPUT ONLY:
//
// The payer and earner relationships must be
// supplied by an upstream source.
//
// This organ does not invent either side.
//
// ECONOMIC RELATIONSHIP:
//
// payerRef
// = the declared party paying around the interest.
//
// earnerRef
// = the declared party earning around the interest.
//
// interestRelationshipRef
// = the declared Interest relationship this
// economic relationship belongs to.
//
// The same party may not be silently invented
// into either role.
//
// CyberInterest preserves only the declared
// relationship between the sides.
//

(function () {
  "use strict";

  const ORGAN = "CyberInterestSubSystem";
  const RECORD_TYPE =
    "CYBER_INTEREST_ECONOMIC_RELATIONSHIP";

  function normalizeText(value) {
    return typeof value === "string"
      ? value.trim()
      : "";
  }

  function createInterestEconomicRelationship(input) {
    if (!input || typeof input !== "object") {
      return {
        ok: false,
        economicRelationship: null,
        reason:
          "INTEREST_ECONOMIC_RELATIONSHIP_INPUT_REQUIRED"
      };
    }

    const interestRelationshipRef =
      normalizeText(input.interestRelationshipRef);

    const payerRef =
      normalizeText(input.payerRef);

    const earnerRef =
      normalizeText(input.earnerRef);

    const sourceRef =
      normalizeText(input.sourceRef);

    const contextRef =
      normalizeText(input.contextRef);

    if (!interestRelationshipRef) {
      return {
        ok: false,
        economicRelationship: null,
        reason:
          "INTEREST_RELATIONSHIP_REF_REQUIRED"
      };
    }

    if (!payerRef) {
      return {
        ok: false,
        economicRelationship: null,
        reason:
          "INTEREST_ECONOMIC_PAYER_REQUIRED"
      };
    }

    if (!earnerRef) {
      return {
        ok: false,
        economicRelationship: null,
        reason:
          "INTEREST_ECONOMIC_EARNER_REQUIRED"
      };
    }

    const economicRelationship = Object.freeze({
      recordType: RECORD_TYPE,
      organ: ORGAN,

      interestRelationshipRef,

      payerRef,
      earnerRef,

      sourceRef: sourceRef || null,
      contextRef: contextRef || null,

      payerDeclared: true,
      earnerDeclared: true,

      amountDeclared: false,
      paymentExecuted: false,
      valueDeclared: false,
      conversionDeclared: false,
      advertisementDeclared: false,
      analyticsDeclared: false,
      authorityDeclared: false,
      monetizationConsentDeclared: false,

      economicRelationshipDeclared: true
    });

    return {
      ok: true,
      economicRelationship,
      reason:
        "INTEREST_ECONOMIC_RELATIONSHIP_RECORDED"
    };
  }

  if (
    typeof module !== "undefined" &&
    module.exports
  ) {
    module.exports = {
      createInterestEconomicRelationship
    };
  }

  if (typeof window !== "undefined") {
    window.CyberInterestEconomicRelationship = {
      createInterestEconomicRelationship
    };
  }
})();
