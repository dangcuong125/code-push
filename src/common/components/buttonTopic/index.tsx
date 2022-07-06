import { Button } from 'native-base';
import React from 'react';

const ButtonTopic = ({
  displayPickingTopic,
  item,
  handlePickingTopic,
}: any) => {
  return (
    <Button
      height={'27px'}
      lineHeight={'27px'}
      px={2}
      marginLeft={4}
      variant="outline"
      borderColor="#3D9BE0"
      bgColor={
        item.enabled === 1 || displayPickingTopic === 'All' ? '#3D9BE0' : '#FFFFFF'
      }
      onPress={() => handlePickingTopic(item)}
      _text={{
        color:
          item.enabled === 1 || displayPickingTopic === 'All' ? '#FFFFFF' : '#3D9BE0',
        fontStyle: 'normal',
        height: '20px',
        fontWeight: 400,
      }}>
      {item.key}
    </Button>
  );
};

export default ButtonTopic;
