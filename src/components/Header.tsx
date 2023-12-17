import ProfitIcon from "../assets/images/profit.png";
import DarkIcon from "../assets/images/icons8-moon-48.png";
import LightIcon from "../assets/images/icons8-sun.svg";
import { Heading, IconButton, useColorMode } from "@chakra-ui/react";

const style_config = {
  dark: {
    icon: <img src={LightIcon} width="32" alt="Ícone sol" />,
    title: 'Ativar modo claro',
    hover: 'hover:bg-yellow-100',
  },
  light: {
    icon: <img src={DarkIcon} width="32" alt="Ícone lua" />,
    title: 'Ativar modo escuro',
    hover: 'hover:bg-gray-500',
  }
};

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { icon, title, hover } = style_config[colorMode];

  return (
    <div className="flex justify-between items-center space-x-4 px-5 md:px-20">
      <div className="inline-flex py-3 ">
        <img src={ProfitIcon} width="56" height="56" alt="ícone de uma calculadora e uma bolsa de dinheiro" />
        <Heading size="lg" as="h1" className="pl-4 place-self-center">PJ x CLT</Heading>
      </div>
      <IconButton
        onClick={toggleColorMode}
        aria-label={title}
        title={title}
        icon={icon}
        bg="transparent"
        borderRadius="lg"
        _hover={{}}
        className={`${hover} transition duration-300`}
      />
    </div>
  );
}
