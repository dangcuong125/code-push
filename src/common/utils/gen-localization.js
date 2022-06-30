const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');

// Initialize the sheet
const doc = new GoogleSpreadsheet(
  '1VML0tn0VLtMWqWyZU-vZov2-wWW29eN0aTOct65sITo',
);

// Initialize Auth
const init = async () => {
  await doc.useServiceAccountAuth({
    client_email: 'clevertube@bili-dev.iam.gserviceaccount.com', // don't forget to share the Google sheet with your service account using your client_email value
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCw+pXomehWLTgT\nPW7Lulg1xbnuVn9Ks61u3qewAkmU4xc/xFq0xWcrVaFOYGjAcJoCoeySWBR4aWFh\nVzS5J31NNb94uIOKoT2fmNfvovH3PTMQ1RdcWBNvPS0ln9zX5ph9qZufWuBA8Ekb\n+6GguhZMONLE8C5pFB7VUxM7Qci8V7dxE9mI1FWzZxGTG9oZUsXBZO4Tp99ezmGU\nIebd/n17TtJ02rM3uxxXwCd39mg/XU+Pj5MNXGlhrXAuZCDOPlhx2zPv3J2wuWBn\nd1h4dnkVGJGPDWF96oNgBPG5tgdAELv3vUCqcOJk7k1tWGiMzvL5ofJyoFoJf1Kd\nEI1RlZb7AgMBAAECggEAC9/RoBN3gb9d9E3aZGPtLYpwhlvFBaZBkYnx4VQooLXj\nO52OjR4eOnZFMOTfZ7ixCf0tn3ILyY/J1LCiXSFCUyRd45kpsOr5n1QveijKKFGx\ns+7q4YDCqQ4x5xovRJ3Nscdn+syroDUfCqLFqOrjZRt+P3AdWmKFtmrGWbhOYh3k\nmImbaO0q5Th9Up+mibSQw9qWZmeYHoD8qAFnjB4pBCHVpTtLIm83It9VTDkMSvgH\nhma98PInD4QK6xSUBneAYU8dEso3XD4xWoAJP9JVFZFUk6US5QNmUuhMemR3vxq8\nbKlf+T98qc65LDwG1V/hC3DZFWAa9OFUlv/M3kgCWQKBgQDhqSIqUVfcySJzL26M\nscDKwW6zR7Y4QhxME1TFe0Fn+AxNMfVS9Xq3Z92z+bwd172GQeeWITZEdyNTjx5b\n1kYh0cPHE+jiBBWXxwollA9x+3+XSVmeZy5dR7H9fUk9fzyU9NX3R9WadA3YZgAW\nbJGPQm+iXbCMPdETNKX2qE9buQKBgQDIxed/xpgvdWPIbUPqf5Rl9o7slFhIRt6N\n4banmWxuy1+G1s5C00tV3OMwOiO12PfVbTv9mbb239I15s4LgibMOKBfo6qP5VUk\nqQA8jiBa36ok13v52URwovxPnByNxgBluqy4SSrCCe1pfngxIYwMaqJ7CN1ZM93m\n5TTFwYKqUwKBgC7U7As+QG7Iq0aeZGH8jddGV5QLYOzCA59iL6igUM2j8+GdaZ1i\n5qnje2ZbgMfsux9+0/IbSGjjFMjFnfZPPNTN9MR/BEjLsjOCkj+EP8RW/n7GMTwn\ni76+H1lNRALoQglj2nfsR487YJg1avU8aOUDU6mtqfMg7SAAQCU1fuq5AoGAJqC0\n7oeGBjN+tDQZigdrxMZQL0JHTficnw2bN9mz3Aky4t13J7JBX061QzUcY8NPw3dV\nwHAPnKXpasdyQxKSZl5KtLvnd/H2lKwTSJNLtFAuCxKOXr6nhUhGZQazE6/RqcDl\ntDsXh+ejDtXvR/ydVlI52pQVCjGJcwAMTDPz8NMCgYBKAhR4rrL5Fw8nyZq/W37U\n+lE8q7FTToW2D/UghI/c/xFlB3dNCYkLZWzncRdG1bkE+uGrHJM52fvLCfJaSMEC\nrUJZn4j/kuz7EvBnX6jeeoX44RUANfm5gnurK1Qd2VH6xPUMrDW8f2w5/AuHDAuC\nCVmRd0r4yD/McUL+YRAW5Q==\n-----END PRIVATE KEY-----\n',
  });
};

const read = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByTitle.Common; // get the sheet by title, I left the default title name. If you changed it, then you should use the name of your sheet
  await sheet.loadHeaderRow(); // Loads the header row (first row) of the sheet
  const colTitles = sheet.headerValues; // array of strings from cell values in the first row
  const rows = await sheet.getRows({ limit: sheet.rowCount }); // fetch rows from the sheet (limited to row count)

  let result = {};
  // map rows values and create an object with keys as columns titles starting from the second column (languages names) and values as an object with key value pairs, where the key is a key of translation, and value is a translation in a respective language
  rows.forEach(row => {
    colTitles.slice(1).forEach(title => {
      result[title] = result[title] || [];
      const key = row[colTitles[0]];
      result = {
        ...result,
        [title]: {
          ...result[title],
          [key]: row[title] !== '' ? row[title] : undefined,
        },
      };
    });
  });

  return result;
};

const write = data => {
  Object.keys(data).forEach(key => {
    fs.writeFile(
      `src/common/translations/${key}.json`,
      JSON.stringify(data[key], null, 2),
      err => {
        if (err) {
          console.error(err);
        }
      },
    );
  });
};

init()
  .then(() => read())
  .then(data => write(data))
  .catch(err => console.log('ERROR!!!!', err));
