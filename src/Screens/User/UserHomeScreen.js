import React, {useState} from 'react';
import {
  Box,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import HomeHeader from '../../Components/User/Home/HomeHeader';
import {Color} from '../../Helper/Constants';
import {CalendarDaysIcon} from 'react-native-heroicons/solid';
import DatePicker from 'react-native-date-picker';
import Status from '../../Components/User/Home/Status';
import {StatusData} from '../../Helper/StaticData';
import {Dimensions} from 'react-native';
const UserHomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <Stack flex="1">
      <HomeHeader />
      <Stack p="3">
        <HStack justifyContent={'space-between'}>
          <Text
            color="#fff"
            bg={Color.primary}
            rounded="full"
            px="2"
            py="1"
            w="24"
            textAlign={'center'}>
            Today x
          </Text>
          <Pressable
            onPress={() => {
              setOpen(true);
            }}>
            <CalendarDaysIcon size={30} color="black" />
          </Pressable>
        </HStack>

        <Heading my="4">Status</Heading>
        <ScrollView mb="70%" showsVerticalScrollIndicator={false} vertical>
          {StatusData.length > 0 &&
            StatusData.map((item, i) => (
              <Status title={item?.title} key={i} value={item?.value} />
            ))}
        </ScrollView>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </Stack>
    </Stack>
  );
};

export default UserHomeScreen;
