'use client';

import { FaChartBar, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { Box, Group, Image, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

const Header = () => {
  const { width } = useViewportSize();
  return (
    <Box bg="#000000" w="calc(100vw - 17px)">
      <Box maw={1200} m="0 auto" py={16}>
        <Group justify="space-between" px={24}>
          <Group align="center" justify="center">
            <Image
              src="/images/trump-logo.png"
              w="full"
              fit="contain"
              alt="prize"
              h={width > 768 ? 77 : 52}
            />
          </Group>
          {width > 786 && (
            <Group gap={50}>
              <Title fz={26} fw={400} tt="uppercase" c="#ffffff">
                How to buy
              </Title>
              <Title fz={26} fw={400} tt="uppercase" c="#ffffff">
                DexTools
              </Title>
            </Group>
          )}
          <Group gap={18}>
            <FaTelegramPlane size={width > 768 ? 27 : 22} color="#ffffff" />
            <FaTwitter size={width > 768 ? 27 : 22} color="#ffffff" />
            <FaChartBar size={width > 768 ? 27 : 22} color="#ffffff" />
          </Group>
        </Group>
      </Box>
    </Box>
  );
};

export default Header;
