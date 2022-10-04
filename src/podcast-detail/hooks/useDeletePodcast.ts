import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useMutation, useQueryClient } from 'react-query';
import { setIsSaveAudio } from '../reducer/podcastDetail';
import { deletePodcast } from '../services';

export const useDeletePodcast = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  return useMutation(deletePodcast, {
    onMutate: async (deletePodcast: number[]) => {
      await queryClient.cancelQueries([
        QUERY_KEYS.PODCAST_DETAIL,
        ...deletePodcast,
      ]);
      const previousData = queryClient.getQueryData([
        QUERY_KEYS.PODCAST_DETAIL,
        ...deletePodcast,
      ]);
      dispatch(setIsSaveAudio(0));
      queryClient.setQueryData([QUERY_KEYS.PODCAST_DETAIL, ...deletePodcast], {
        ...previousData,
        data: {
          ...previousData?.data,
          userToMedia: 0,
        },
      });
      return { previousData, deletePodcast };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_error, _variables, context) => {
      if (context?.deletePodcast.length) {
        dispatch(setIsSaveAudio(context.deletePodcast[0]));
        queryClient.setQueryData(
          [QUERY_KEYS.PODCAST_DETAIL, ...context.deletePodcast],
          context?.previousData,
        );
      }
    },
  });
};
