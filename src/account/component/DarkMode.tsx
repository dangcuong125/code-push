import { Box, HStack, Heading, Modal, Radio, VStack } from 'native-base';
import React, { Fragment } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DarkMode = ({ showModal, setShowModal }) => {
  return (
    <Fragment>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bgColor={'rgba(4, 4, 15, 0.4)'}>
        <Box
          width={'100%'}
          bgColor={'neural.1'}
          shadow={'0px 0px 4px rgba(171, 190, 209, 0.4)'}
          borderRadius={'25px'}
          marginBottom={0}
          marginTop={'auto'}
          safeArea={4}
          safeAreaBottom={8}>
          <VStack space={6}>
            <HStack justifyContent={'space-between'}>
              <Heading
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={600}
                lineHeight={'20px'}
                color={'neural.10'}>
                Chế độ nền tối
              </Heading>
              <Ionicons
                name="close-circle"
                size={22}
                onPress={() => setShowModal(false)}
              />
            </HStack>
            <Radio.Group name="language">
              <VStack space={7}>
                <Radio
                  value="1"
                  width={'100%'}
                  flexDirection={'row-reverse'}
                  justifyContent={'space-between'}
                  size={'sm'}
                  bgColor={'transparent'}
                  borderWidth={'1.5px'}
                  borderColor={'neural.7'}
                  _icon={{
                    color: 'neural.1',
                  }}
                  _checked={{
                    backgroundColor: 'primary.21',
                    borderColor: 'primary.21',
                  }}
                  _text={{
                    fontStyle: 'normal',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '19px',
                    color: 'neural.10',
                  }}>
                  Bật
                </Radio>
                <Radio
                  value="2"
                  width={'100%'}
                  flexDirection={'row-reverse'}
                  justifyContent={'space-between'}
                  size={'sm'}
                  bgColor={'transparent'}
                  borderWidth={'1.5px'}
                  borderColor={'neural.7'}
                  _icon={{
                    color: 'neural.1',
                  }}
                  _checked={{
                    backgroundColor: 'primary.21',
                    borderColor: 'primary.21',
                  }}
                  _text={{
                    fontStyle: 'normal',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '19px',
                    color: 'neural.10',
                  }}>
                  Tắt
                </Radio>
              </VStack>
            </Radio.Group>
          </VStack>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default DarkMode;
