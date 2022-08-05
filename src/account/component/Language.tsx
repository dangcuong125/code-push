import { Box, HStack, Heading, Modal, Radio, Text, VStack } from 'native-base';
import React, { Fragment, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Language = ({ showModal, setShowModal }) => {
  const [valueLang, setValueLang] = useState('');
  const { t, i18n } = useTranslation();

  const handleChangelanguage = async (nextValue: string) => {
    setValueLang(nextValue);
    await AsyncStorage.setItem('language', nextValue);
    i18n.changeLanguage(nextValue);
  };

  useEffect(() => {
    const getValueLanguage = async () => {
      const value = await AsyncStorage.getItem('language');
      if (value) setValueLang(value);
      if (!value) setValueLang('vi');
    };
    getValueLanguage();
  }, []);

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
                {t('chooseLanguage')}
              </Heading>
              <Ionicons
                name="close-circle"
                size={22}
                onPress={() => setShowModal(false)}
              />
            </HStack>
            <Radio.Group
              name="language"
              value={valueLang}
              onChange={value => handleChangelanguage(value)}
            >
              <VStack space={7}>
                <Radio
                  value='vi'
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
                  }}>
                  {t('vi')}
                </Radio>
                <Radio
                  value='en'
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
                  }}>
                  {t('en')}
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
                  color={'neural.10'}>
                  {t('chooseLanguageAthoner')}
                </Text>
                <MaterialIcons name="arrow-forward-ios" size={20} />
              </HStack>
            </TouchableOpacity>
          </VStack>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Language;
