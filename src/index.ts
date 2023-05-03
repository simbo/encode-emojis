import { encodeHTML } from 'entities';

export function encodeEmojis(str: string): string {
  return str.replaceAll(
    /(\u00A9|\u00AE|[\u2000-\u3300]|\uD83C[\uD000-\uDFFF]|\uD83D[\uD000-\uDFFF]|\uD83E[\uD000-\uDFFF])+/g,
    match => encodeHTML(match)
  );
}
