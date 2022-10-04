import { QUERY_KEYS } from '@clvtube/common/constants/querykeys.constants';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import { useMutation, useQueryClient } from 'react-query';
import { setIsSaveVideo } from '../playingVideo/slice';
import { deleteSaveVideo } from '../services';

export const useDeleteVideo = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  return useMutation(deleteSaveVideo, {
    onMutate: async (deleteVideo: number[]) => {
      await queryClient.cancelQueries([
        QUERY_KEYS.GET_VIDEO_ITEM,
        ...deleteVideo,
      ]);
      const previousData = queryClient.getQueryData([
        QUERY_KEYS.GET_VIDEO_ITEM,
        ...deleteVideo,
      ]);
      dispatch(setIsSaveVideo(0));
      queryClient.setQueryData([QUERY_KEYS.GET_VIDEO_ITEM, ...deleteVideo], {
        ...previousData,
        data: {
          ...previousData?.data,
          userToMedia: 0,
        },
      });
      return { previousData, deleteVideo };
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (_error, _variables, context) => {
      if (context?.deleteVideo.length) {
        dispatch(setIsSaveVideo(context.deleteVideo[0]));
        queryClient.setQueryData(
          [QUERY_KEYS.GET_VIDEO_ITEM, ...context.deleteVideo],
          context?.previousData,
        );
      }
    },
  });
};
