import { t } from 'i18next';
import { Button, HStack, Heading, Text, VStack } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';

type IChooseCategoryProps = {
  title: string;
  category: any[];
};

const ChooseCategory = ({ title, category }: IChooseCategoryProps) => {
  return (
    <VStack bgColor={'white'} safeAreaY={4} space={5}>
      <HStack
        safeAreaX={4}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Heading
          fontStyle={'normal'}
          fontSize={'18px'}
          fontWeight={600}
          color={'#000000'}>
          {title}
        </Heading>
        <Text
          fontStyle={'normal'}
          fontSize={'12px'}
          fontWeight={400}
          color={'#216BCD'}>
          {t('viewAll')}
        </Text>
      </HStack>
      <FlatList
        horizontal={true}
        data={category}
        renderItem={({ item }) => {
          return (
            <Button
              height={'27px'}
              lineHeight={'27px'}
              px={2}
              marginLeft={3}
              variant="outline"
              borderColor="#3D9BE0"
              bgColor={'#FFFFFF'}
              //   onPress={onPress}
              _text={{
                color: '#3D9BE0',
                fontStyle: 'normal',
                height: '20px',
                fontWeight: 400,
              }}>
              {item.description}
            </Button>
          );
        }}
      />
    </VStack>
  );
};

export default ChooseCategory;
