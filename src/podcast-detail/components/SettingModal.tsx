import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Button, Flex, Heading, Image, Modal, Slider, Text } from 'native-base';
import { podcastDetailSetting } from '@clvtube/common/constants/imagePath';
import { useAppDispatch } from '@clvtube/common/hooks/useAppDispatch';
import {
  getDefaultValueSlider,
  getSliderValue,
} from '../reducer/podcastDetail';
import { useAppSelector } from '@clvtube/common/hooks/useAppSelector';

export const SettingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
  const valueSlider = useAppSelector(state => state.podcastDetail.defaultValue);

  const dispatch = useAppDispatch();
  return (
    <Modal isOpen={isOpen} onClose={onClose} safeAreaTop={true}>
      <Modal.Content bgColor="#FFFFFF" width="327px" height={'250px'}>
        <Text
          margin="auto"
          color="neutral.10"
          fontSize="20px"
          fontWeight={600}
          marginTop="24px">
          {t('setting')}
        </Text>
        <Flex direction="row" marginLeft="46.5px">
          <Image source={podcastDetailSetting.SETTING_TEXT_SIZE} />
          <Heading
            marginLeft="10px"
            color="neutral.10"
            fontSize="16px"
            fontWeight={400}>
            {t('textSize')}
          </Heading>
        </Flex>
        <Flex
          marginTop="13px"
          direction="row"
          margin="auto"
          alignItems={'center'}>
          <Text fontSize="14px" fontWeight="400" color="neutral.10">
            A
          </Text>
          <View style={{ width: 200, margin: 'auto', marginLeft: 12 }}>
            <Slider
              maxW="300"
              defaultValue={valueSlider}
              minValue={0}
              maxValue={100}
              onChange={e => dispatch(getDefaultValueSlider(Math.floor(e)))}
              step={10}>
              <Slider.Track bgColor="#73777B">
                <Slider.FilledTrack bgColor="#216BCD" />
              </Slider.Track>
              <Slider.Thumb bgColor={'#216BCD'} />
            </Slider>
          </View>
          <Text
            marginLeft="12px"
            fontSize="24px"
            fontWeight="600"
            color="neutral.10">
            A
          </Text>
        </Flex>
        <Button
          bgColor={'text.500'}
          width={'184px'}
          margin="auto"
          onPress={() => {
            onClose();
            dispatch(getSliderValue(valueSlider));
          }}>
          {t('save')}
        </Button>
      </Modal.Content>
    </Modal>
  );
};
