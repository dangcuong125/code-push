import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { IUserSaveMedia } from '@clvtube/common/interfaces/common.interface';
import { generateId } from '@clvtube/common/utils/common.utils';
import { useMutation, useQueryClient } from 'react-query';
import { postUserSaveVideo } from '../services';

export const useSaveVideo = () => {
  const queryClient = useQueryClient();
  return useMutation(postUserSaveVideo, {
    onMutate: async (saveVideo: IUserSaveMedia) => {
      await queryClient.cancelQueries([
        QUERY_KEYS.GET_VIDEO_ITEM,
        saveVideo.videoId,
      ]);
      const previousData = queryClient.getQueryData([
        QUERY_KEYS.GET_VIDEO_ITEM,
        saveVideo.videoId,
      ]);
      queryClient.setQueryData([QUERY_KEYS.GET_VIDEO_ITEM, saveVideo.videoId], {
        ...previousData,
        data: {
          ...previousData?.data,
          userToMedia: generateId(),
        },
      });
      return { previousData, saveVideo };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(
        [QUERY_KEYS.GET_VIDEO_ITEM, context?.saveVideo.videoId],
        context?.previousData,
      );
    },
  });
};
