import React, { Fragment } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Heading,
    HStack,
    Modal,
    ScrollView,
    Text,
    VStack,
  } from 'native-base';
  import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDeisgn from 'react-native-vector-icons/AntDesign';


const SettingNotify = ({showModal, setShowModal}) => {
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
                            Cài đặt thông báo
                        </Heading>
                        <AntDeisgn
                            name='closecircleo'
                            size={22}
                            color={'neural.5'}
                            onPress={() => setShowModal(false)}
                        />
                    </HStack>
                    <VStack space={7}>
                        <Checkbox
                            value='one'
                            flexDirection={'row-reverse'}
                            justifyContent={'space-between'}
                            bgColor={'transparent'}
                            borderWidth={'1px'}
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
                                order: 1,

                            }}
                        >
                            Nhắc nhở học từ mới
                        </Checkbox>
                        <Checkbox
                            value='two'
                            flexDirection={'row-reverse'}
                            justifyContent={'space-between'}
                            bgColor={'transparent'}
                            borderWidth={'1px'}
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
                            Video/Podcasts mới
                        </Checkbox>
                        <Checkbox
                            value='three'
                            flexDirection={'row-reverse'}
                            justifyContent={'space-between'}
                            bgColor={'transparent'}
                            borderWidth={'1px'}
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
                            Âm thanh
                        </Checkbox>
                    </VStack>
                </VStack>
            </Box>
          </Modal>
        </Fragment>
    );
}

export default SettingNotify;
