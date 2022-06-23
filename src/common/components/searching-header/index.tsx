import React from 'react'
import { Avatar, Flex, Icon, Input } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const SearchingHeader = () => {
  return (
    <Flex direction="row" justifyContent="space-around" alignItems="center">
      <Avatar
        width={'32px'}
        height={'32px'}
        borderRadius={'32px'}
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/77ba/8298/bd2ff0a419f7779827eb116ffacf6dd4?Expires=1655078400&Signature=WKeP2aPeKVV5Qki62c~OusMBnmqdoCyeGIV9GgflZKrcWhQ5TOV6B03xqwtyOxCM5ph8B3DwaAtMxuARZdKWL3XwfUf50nmZSnpq2wMKYMOTxL5oA4KGcFyBY37cmKPIFSbm0oudf4xE5AE0ZHu8oHTOMEhg4pO9fXwLlTiQvY6L076BTpMhdKcwu2Pbfc19IMp6yAHTivMtgrQ6qzbAss47dihQG46eU6M2RIJ2~XBpHjbPMncB7vsgTieaR9S~5xLG3DmTt1yEkMNVnt8V1j2aRgD7utnukq-G7VDYWe11UqXgU1~YVQqGvu-DNkfoHweWvzVA7fa3wTLST4ej~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        }}
      />
      <Input
        width="262px"
        placeholder="Tìm kiêm"
        InputLeftElement={
          <Icon as={AntDesign} name="search1" size={15} marginLeft={2} />
        }
      />
      <Ionicons name="ios-notifications" size={25} />
    </Flex>
  )
}
