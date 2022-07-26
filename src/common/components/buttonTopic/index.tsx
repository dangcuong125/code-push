import { Button } from 'native-base';
import React from 'react';

const ButtonTopic = ({
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
        item.isSelected
          ? 'primary.11'
          : 'neural.1'
      }
      onPress={() => handlePickingTopic(item.key)}
      _text={{
        color:
          item.isSelected
            ? 'neural.1'
            : 'primary.11',
        fontStyle: 'normal',
        height: '20px',
        fontWeight: 400,
      }}>
      {item.key}
    </Button>
  );
};

export default ButtonTopic;
