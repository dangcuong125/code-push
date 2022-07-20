import React, { Fragment } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Heading,
    HStack,
    Modal,
    Radio,
    ScrollView,
    Text,
    VStack,
  } from 'native-base';
  import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDeisgn from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Language = ({showModal, setShowModal}) => {
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
              safeAreaBottom={8}
            >
                <VStack space={6}>
                    <HStack justifyContent={'space-between'}>
                        <Heading
                            fontStyle={'normal'}
                            fontSize={'14px'}
                            fontWeight={600}
                            lineHeight={'20px'}
                            color={'neural.10'}
                        >
                            Chọn ngôn ngữ chính
                        </Heading>
                        <Ionicons
                            name='close-circle'
                            size={22}
                            color={'neural.5'}
                            onPress={() => setShowModal(false)}
                        />
                    </HStack>
                    <Radio.Group name='language'>
                        <VStack space={7}>
                            <Radio
                                value='1'
                                width={'100%'}
                                flexDirection={'row-reverse'}
                                justifyContent={'space-between'}
                                size={'sm'}
                                bgColor={'transparent'}
                                borderWidth={'1.5px'}
                                borderColor={'neural.7'}
                                _icon={{
                                    color: 'white',
                                }}
                                _checked={{
                                    backgroundColor: '#216BCD',
                                    borderColor: '#216BCD',
                                }}
                                _text={{
                                    fontStyle: 'normal',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '19px',
                                    color: 'neural.10',

                                }}
                            >
                                Tiếng Việt
                            </Radio>
                            <Radio
                                value='2'
                                width={'100%'}
                                flexDirection={'row-reverse'}
                                justifyContent={'space-between'}
                                size={'sm'}
                                bgColor={'transparent'}
                                borderWidth={'1.5px'}
                                borderColor={'neural.7'}
                                _icon={{
                                    color: 'white',
                                }}
                                _checked={{
                                    backgroundColor: '#216BCD',
                                    borderColor: '#216BCD',
                                }}
                                _text={{
                                    fontStyle: 'normal',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '19px',
                                    color: 'neural.10',

                                }}
                            >
                                Tiếng Anh
                            </Radio>
                        </VStack>
                    </Radio.Group>
                    <TouchableOpacity>
                        <HStack safeAreaY={4} justifyContent={'space-between'}>
                            <Text
                                fontStyle={'normal'}
                                fontSize={'14px'}
                                fontWeight={400}
                                lineHeight={'19px'}
                                color={'neural.10'}
                            >
                                Chọn ngôn ngữ khác
                            </Text>
                            <MaterialIcons name='arrow-forward-ios' size={20} />
                        </HStack>
                    </TouchableOpacity>
                </VStack>
            </Box>
          </Modal>
        </Fragment>
    );
}

export default Language;
