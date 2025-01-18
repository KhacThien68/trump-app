import { Box, Button, Grid, GridCol, Group, Image, Mark, Stack, Text, Title } from '@mantine/core';
import classes from './home.module.css';

export default function HomePage() {
  const howToBuyList = [
    {
      title: 'DOWNLOAD PHANTOM',
      content:
        'Download and install phantom on the appstore, or, alternatively if you’re on desktop download and install the browser extension.',
    },
    {
      title: 'SECURE YOUR SOL',
      content:
        'Now all you’ve got to do is buy your SOL in the PHANTOM APP, or, alternatively you can use an exchange and deposit using your wallet address.',
    },
    {
      title: 'BUY SOME $TRUMP',
      content:
        'Now go to Raydium or Jupiter and paste the $TRUMP Contract Address to swap your SOL.',
    },
    {
      title: 'ADD TO YOUR WALLET',
      content:
        'Now you’re all set! Welcome aboard the next rocket to the moon, just import the contract address to view you’re holdings and you can track your earnings.',
    },
  ];
  return (
    <Box w="calc(100vw - 17px)">
      <Group align="center" justify="center">
        <Image src="/images/trump-banner.jpg" w="100%" fit="contain" alt="trump logo" flex={1} />
      </Group>
      <Stack align="center" justify="center" py={50} gap={20}>
        <Title c="#000000" fz={77} fw={600} ta="center">
          BUY{' '}
          <Mark c="#ff0000" bg="transparent">
            $TRUMP
          </Mark>{' '}
          NOW
        </Title>
        <Box p={10} bd="1px solid #000000">
          <Text fz={{ sm: 19, base: 11 }} fw={500}>
            EXVUTukPd4W5EhLkWju67wo5kZ6UiVHdaUXXQHPwpump
          </Text>
        </Box>
      </Stack>
      <Stack pos="relative">
        <Group
          w="100%"
          h={{ sm: 46, base: 24 }}
          className={classes.divider}
          pos="absolute"
          top={0}
          left={0}
        />
        <Group w="100%" bg="linear-gradient(180deg, #DFDFDF 0%, #FFFFFF 25%)" px={10}>
          <Grid maw={1200} pt={90} pb={40} gutter={20}>
            <GridCol span={{ base: 12, sm: 6 }}>
              <Group align="center" justify="center">
                <Image src="/images/trump-img-1.jpg" w="100%" fit="contain" alt="trump img" />
              </Group>
            </GridCol>
            <GridCol span={{ base: 12, sm: 6 }}>
              <Stack justify="center" gap={20}>
                <Title c="#000000" fz={40} fw={600}>
                  ABOUT TRUMP
                </Title>
                <Text c="#000000" fz={22} fw={600}>
                  Welcome Back, President Trump! America is ready as Donald J. Trump returns as the
                  47th President! Let’s Make America Great Again—AGAIN! 🚀🦅
                </Text>
                <Text c="#7a7a7a" mb={14} fz={16}>
                  Let's Celebrate together!
                </Text>
                <Group>
                  <Button c="#ffffff" bg="#ff0000" fz={18} fw={600} px={24} py={12} h={42}>
                    BUY $TRUMP
                  </Button>
                </Group>
              </Stack>
            </GridCol>
          </Grid>
        </Group>
      </Stack>
      <Stack pos="relative">
        <Group
          w="100%"
          h={{ sm: 46, base: 24 }}
          className={classes.divider1}
          pos="absolute"
          top={0}
          left={0}
        />
        <Stack
          align="center"
          w="100%"
          bg="linear-gradient(180deg, #D8D8D8 0%, #FFFFFF 29%)"
          pb={20}
        >
          <Group w="100%" justify="center">
            <Title c="#000000" fz={{ sm: 77, base: 46 }} fw={600} ta="center" py={16} pt={90}>
              HOW TO BUY{' '}
              <Mark c="#ff0000" bg="transparent">
                $TRUMP
              </Mark>
            </Title>
          </Group>
        </Stack>
      </Stack>
      <Group maw={1440} m="0 auto" pt={10}>
        <Grid w="100%" justify="center" gutter={8} c="#ffffff">
          {howToBuyList.map((item, index) => {
            return (
              <GridCol span={{ base: 12, sm: 6 }} key={index}>
                <Stack p={30} pt={90} bg="#000000" h="100%" gap={28}>
                  <Group align="center">
                    <Image src="/images/trump-img-1.jpg" w={47} fit="contain" alt="trump img" />
                  </Group>
                  <Title fz={40} fw={700}>
                    {item.title}
                  </Title>
                  <Text fz={16} fw={400} maw={380}>
                    {item.content}
                  </Text>
                </Stack>
              </GridCol>
            );
          })}
        </Grid>
      </Group>
      <Group py={60} justify="center">
        <Title fz={{ sm: 77, base: 40 }} fw={600} ta="center">
          MAKE AMERICA GREAT{' '}
          <Mark c="#ff0000" bg="transparent">
            AGAIN
          </Mark>
        </Title>
      </Group>
    </Box>
  );
}
