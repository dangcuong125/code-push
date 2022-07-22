import {
  Box,
  Button,
  Heading,
  Modal,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Popup = ({
  showModal,
  setShowModal,
  isSuccess,
  onPress,
  title,
  description,
}) => {
  return (
    <Fragment>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bgColor={'rgba(4, 4, 15, 0.4)'}>
        <Box
          width={'84%'}
          bgColor={'neural.1'}
          shadow={'0px 0px 4px rgba(171, 190, 209, 0.4)'}
          borderRadius={'12px'}>
          <ScrollView>
            <VStack alignItems={'center'} safeAreaY={5} space={4}>
              <Ionicons
                name="checkmark-done-circle-outline"
                size={60}
                color="green"
              />
              <Heading
                fontStyle={'normal'}
                fontSize={'18px'}
                fontWeight={500}
                lineHeight={'25px'}
                color={'neural.10'}>
                {title}
              </Heading>
              <Text
                fontStyle={'normal'}
                fontSize={'14px'}
                fontWeight={400}
                lineHeight={'19px'}
                color={'neural.10'}
                textAlign={'center'}
                paddingX={6}>
                {description}
              </Text>
              <Button
                colorScheme="success"
                width={'65%'}
                borderRadius={'8px'}
                _text={{
                  fontStyle: 'normal',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '30px',
                  color: '#FFFFFF',
                }}
                onPress={() => {
                  setShowModal(false);
                  onPress();
                }}>
                Xác nhận
              </Button>
              {isSuccess && (
                <TouchableOpacity>
                  <Text
                    fontStyle={'normal'}
                    fontSize={'14px'}
                    fontWeight={600}
                    lineHeight={'30px'}
                    color={'primary.21'}>
                    Thoát
                  </Text>
                </TouchableOpacity>
              )}
            </VStack>
          </ScrollView>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Popup;
