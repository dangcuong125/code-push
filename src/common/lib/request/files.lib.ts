import axios, { AxiosStatic } from 'axios';
import { axiosClient } from '@clvtube/common/lib/request';
import { POST_FILE_PRESIGN } from '../../constants/urlApi.constants';

export async function presignUrl(file: any, axiosInstant?: AxiosStatic) {
  if (file) {
    const imgType = file?.filename.split('.')[1].toLowerCase() || 'png';
    try {
      const presignHeaderInfo = await axiosClient.post(POST_FILE_PRESIGN, {
        type: imgType,
      });
      const urlPostImg = presignHeaderInfo?.data?.presign?.url;
      const headerFields = presignHeaderInfo?.data?.presign?.fields || {};
      const id = presignHeaderInfo?.data?.audio?.id;
      const formData = new FormData();
      Object.keys(headerFields).forEach(header => {
        formData.append(header, headerFields[header]);
      });
      formData.append('file', {
        uri: file.path,
        type: file.mime,
        name: file.filename,
      });

      await (axiosInstant || axios).post(urlPostImg, formData);
      const fileUrl =
        presignHeaderInfo?.data?.presign?.url +
        '/' +
        presignHeaderInfo?.data?.audio?.key;
      const dataImage = {
        ...presignHeaderInfo?.data?.image,
        url: fileUrl,
        id,
      };
      return dataImage;
    } catch (error) {
      console.log(error);
      //   return Promise.reject({});
    }
  }
  return Promise.resolve({});
}
