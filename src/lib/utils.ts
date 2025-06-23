import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toDateString(date: number) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'IST'
  });
}

export function toDateTimeString(date: number) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'IST'
  });
}

/**
 * Groups and orders items in an array based on group definitions and a key selector.
 * Grouped items are placed at the start of the array in the order of the group definitions.
 * Remaining items are appended after the grouped items.
 *
 * @param items - The array of items to group and order
 * @param groups - Array of group definitions: { name: string, items: string[] }
 * @param keySelector - Function to select the key from each item for matching
 * @returns The reordered array with grouped items first
 */
export function groupAndOrderItems<T>(
  items: T[],
  groups: { name: string; items: string[] }[],
  keySelector: (item: T) => string | undefined
): T[] {
  let remainingItems = [...items];
  let groupedItems: T[] = [];

  groups.forEach((group) => {
    const toGroup = remainingItems.filter((item) =>
      group.items.includes(keySelector(item) ?? '')
    );
    remainingItems = remainingItems.filter(
      (item) => !group.items.includes(keySelector(item) ?? '')
    );
    groupedItems = [...groupedItems, ...toGroup];
  });

  return [...groupedItems, ...remainingItems];
}
