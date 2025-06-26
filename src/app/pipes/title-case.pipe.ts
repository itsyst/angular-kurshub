import { Pipe, PipeTransform, computed, inject, Signal } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { LocalizationService } from '../core/localization/localization.service';

/**
 * A pipe that transforms a string into title case using locale-aware rules.
 * This modern version uses `inject` for dependency injection and `computed`
 * for reactive, memoized data transformation.
 *
 * @usage
 * {{ 'en sång om is och eld' | titleCase }}
 * <!-- With 'sv' locale, formats to: "En Sång om Is och Eld" -->
 */
@Pipe({
  name: 'titleCase',
  standalone: true,
})
export class TitleCasePipe implements PipeTransform {
  // 1. Use the `inject` function for modern, constructor-less dependency injection.
  #locale = inject(LOCALE_ID);
  #localizationService = inject(LocalizationService);

  // 2. Use `computed` to create a reactive, memoized signal for the word list.
  //    This value is calculated only when its dependencies change and is cached.
  #lowercaseWords: Signal<Set<string>> = computed(() =>
    this.#localizationService.getLowercaseWords(this.#locale)
  );

  /**
   * Transforms the input string to title case.
   * @param value The string to transform. Can be null or undefined.
   * @returns The title-cased string, or null if the input was null/undefined.
   */
  transform(value: string | null | undefined): string | null {
    if (!value) {
      return null;
    }

    // Read the value from the computed signal by calling it.
    const lowerCaseSet = this.#lowercaseWords();

    return value
      .trim()
      .toLocaleLowerCase(this.#locale)
      .split(/\s+/)
      .map((word, index) => {
        // The first word or words not in our set are always capitalized.
        if (index === 0 || !lowerCaseSet.has(word)) {
          return this.#capitalize(word);
        }
        return word;
      })
      .join(' ');
  }

  /**
   * Capitalizes the first letter of a word using locale-specific rules.
   * @param word The word to capitalize.
   */
  #capitalize(word: string): string {
    if (word.length === 0) {
      return '';
    }
    // 3. Use `toLocaleUpperCase` for consistency and correctness in all languages.
    // 4. Use modern ECMAScript private fields (`#`) for true encapsulation.
    return word.charAt(0).toLocaleUpperCase(this.#locale) + word.slice(1);
  }
}
