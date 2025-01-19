'use client';

import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { Box, Group, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

const Footer = () => {
  const { width } = useViewportSize();
  return (
    <Box bg="#000000" w="calc(100vw - 17px)">
      <Box maw={1440} m="0 auto" py={30} px={20}>
        <Group
          justify={width < 768 ? 'center' : 'space-between'}
          pb={28}
          style={{ borderBottom: '1px solid #3b3b3b' }}
        >
          {width > 768 && (
            <Group>
              <Title fz={27} fw={500} tt="uppercase" c="#ffffff">
                How to buy
              </Title>
              <Title fz={27} fw={500} tt="uppercase" c="#ffffff">
                DexTools
              </Title>
            </Group>
          )}

          <Group gap={18}>
            <FaTelegramPlane size={width > 768 ? 20 : 30} color="#ffffff" />
            <FaTwitter size={width > 768 ? 20 : 30} color="#ffffff" />
          </Group>
        </Group>
      </Box>
    </Box>
  );
};

export default Footer;
