import { encodeHTML } from 'entities';

export function encodeEmojis(str: string): string {
  return str.replaceAll(
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+/g,
    match => encodeHTML(match)
  );
}
