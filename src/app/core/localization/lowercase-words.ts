/**
 * A record mapping a locale code (e.g., 'en', 'sv') to a Set of words
 * that should remain lowercase in a title-cased string.
 * Using a Set provides optimal performance for lookups.
 */
export const LOWERCASE_WORDS_BY_LOCALE: Record<string, Set<string>> = {
  // English
  'en': new Set([
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'with'
  ]),

  // Swedish
  'sv': new Set([
    'av', 'bakom', 'efter', 'för', 'framför', 'från', 'genom', 'hos', 'i', 'in',
    'med', 'mot', 'och', 'om', 'på', 'till', 'under', 'ur', 'utan', 'vid', 'åt'
  ]),
};
