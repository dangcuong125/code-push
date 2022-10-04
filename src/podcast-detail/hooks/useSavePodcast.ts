import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { IUserSaveMedia } from '@clvtube/common/interfaces/common.interface';
import { useMutation, useQueryClient } from 'react-query';
import { postUserSaveAudio } from '../services';

export const useSavePodcast = () => {
  const queryClient = useQueryClient();
  return useMutation(postUserSaveAudio, {
    onMutate: async (saveAudio: IUserSaveMedia) => {
      await queryClient.cancelQueries([
        QUERY_KEYS.PODCAST_DETAIL,
        saveAudio.audioId,
      ]);
      const previousData = queryClient.getQueryData([
        QUERY_KEYS.PODCAST_DETAIL,
        saveAudio.audioId,
      ]);
      queryClient.setQueryData([QUERY_KEYS.PODCAST_DETAIL, saveAudio.audioId], {
        ...previousData,
        data: {
          ...previousData?.data,
          userToMedia: 1,
        },
      });
      return { previousData, saveAudio };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(
        [QUERY_KEYS.PODCAST_DETAIL, context?.saveAudio.audioId],
        context?.previousData,
      );
    },
  });
};
