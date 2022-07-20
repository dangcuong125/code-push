import { Box, HStack, Heading, Modal, ScrollView, VStack } from 'native-base';
import React, { Fragment } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Ipops = {
  showModal: boolean;
  setShowModal: Function;
};

const Vocabulary = ({ showModal, setShowModal }: Ipops) => {
  return (
    <Fragment>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bgColor={'rgba(4, 4, 15, 0.4)'}>
        <Box
          width={'100%'}
          height={'55%'}
          marginBottom={0}
          marginTop={'auto'}
          bgColor={'neural.1'}
          borderTopRadius={'25px'}>
          <ScrollView>
            <VStack safeAreaX={4} safeAreaY={5} space={4}>
              <HStack justifyContent={'space-between'}>
                <Heading
                  fontStyle={'normal'}
                  fontSize={'18px'}
                  fontWeight={500}
                  lineHeight={'25px'}
                  color={'neural.10'}>
                  problem
                </Heading>
                <FontAwesome
                  name="plus-square-o"
                  size={22}
                  color={'neural.10'}
                />
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Vocabulary;
