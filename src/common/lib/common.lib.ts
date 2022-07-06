export function toQueryString(objParams: object) {
  const str = [];
  for (const p in objParams) {
    if (
      Object.prototype.hasOwnProperty.call(objParams, p) &&
      // @ts-ignore
      objParams[p] + ''
    ) {
      str.push(
        // @ts-ignore
        `${encodeURIComponent(p)}=${encodeURIComponent(objParams[p])}`,
      );
    }
  }

  return str.join('&');
}
export function replacePathParams(path: string, newData: object): string {
  let newPath = path;
  Object.keys(newData).forEach(it => {
    // @ts-ignore
    newPath = newPath.replace(`:${it}`, newData[it]);
  });
  return newPath;
}
export const formatTimePlayer = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  let timePlayer = '';

  if (hours > 0) {
    timePlayer += '' + hours + ':' + (mins < 10 ? '0' : '');
  }

  timePlayer += '' + mins + ':' + (secs < 10 ? '0' : '');
  timePlayer += '' + secs;
  return timePlayer;
};
