import { Box, HStack, Heading, Modal, Text, VStack } from 'native-base';
import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChangeAvatar = ({ showModal, setShowModal }) => {
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
          <VStack space={4}>
            <HStack justifyContent={'space-between'}>
              <Heading
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={600}
                lineHeight={'20px'}
                color={'neural.10'}>
                Thay đổi ảnh đại diện
              </Heading>
              <MaterialCommunityIcons
                name="close-box"
                size={25}
                onPress={() => setShowModal(false)}
              />
            </HStack>
            <VStack>
              <TouchableOpacity>
                <HStack safeAreaY={4} justifyContent={'space-between'}>
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'19px'}
                    color={'neural.10'}>
                    Chụp ảnh
                  </Text>
                  <MaterialIcons name="arrow-forward-ios" size={20} />
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity>
                <HStack safeAreaY={4} justifyContent={'space-between'}>
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'19px'}
                    color={'neural.10'}>
                    Chọn ảnh từ thiết bị
                  </Text>
                  <MaterialIcons name="arrow-forward-ios" size={20} />
                </HStack>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default ChangeAvatar;
