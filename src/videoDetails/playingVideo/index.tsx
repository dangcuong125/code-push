import React, { useEffect, useState } from "react";
import { HStack, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView } from 'react-native';
import YoutubeVideo from "./component/YoutubeVideo";
import IconHeader from "./component/IconHeader";
import { useRoute } from "@react-navigation/native";
import { useGetVideoItem } from '../../common/hooks/useVideos';

const PlayingVideo = () => {
    const {id} = useRoute().params;
    console.log({id});
    const [paramsVideo, setParamsVideo] = useState(() => id);
    const { data: videoItem } = useGetVideoItem(paramsVideo);

    console.log({video: videoItem?.data});


    useEffect(() => {
        setParamsVideo(id)
    }, [id]);

    return (
        <ScrollView>
            <VStack
            bgColor={'#E5E5E5'}
            width={'100%'}
            height={'100%'}
        >
            <VStack
                space={2}
                overflow={'hidden'}
                safeAreaTop={12}
                backgroundColor={'white'}
            >
                <IconHeader />
                <YoutubeVideo videoPlay={videoItem?.data} />
            </VStack>
            </VStack>
        </ScrollView>
    )
}

export default PlayingVideo;