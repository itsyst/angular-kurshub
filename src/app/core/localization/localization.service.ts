import { Injectable } from '@angular/core';
import { LOWERCASE_WORDS_BY_LOCALE } from './lowercase-words';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private readonly defaultSet = new Set<string>();

  /**
   * Gets the set of lowercase words for a given locale.
   * It includes fallback logic: 'en-US' will fall back to 'en'.
   * @param locale The full locale string (e.g., 'sv-SE', 'en-US').
   * @returns A Set of words or an empty Set if the language is not configured.
   */
  getLowercaseWords(locale: string): Set<string> {
    // 1. Try the full locale first (e.g., 'en-US')
    if (LOWERCASE_WORDS_BY_LOCALE[locale]) {
      return LOWERCASE_WORDS_BY_LOCALE[locale];
    }

    // 2. Fall back to the base language (e.g., 'en')
    const languageCode = locale.split('-')[0];
    if (LOWERCASE_WORDS_BY_LOCALE[languageCode]) {
      return LOWERCASE_WORDS_BY_LOCALE[languageCode];
    }

    // 3. Return an empty set if no rules are found
    return this.defaultSet;
  }
}
