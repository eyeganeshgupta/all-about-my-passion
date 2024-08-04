import { Burger, Drawer, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { navLinks } from "./Header";

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const size = useMatches({
    xs: "md",
    sm: "lg",
  });

  return (
    <>
      <Drawer.Root
        className="bs:hidden !-z-10"
        position="right"
        opened={opened}
        onClose={toggle}
        size="50vw"
      >
        <Drawer.Overlay className="!-z-0 blur-sm !backdrop-opacity-85" />
        <Drawer.Content className="!-z-0" bg="#112240">
          <Drawer.Body
            className="xs:mt-24 mt-20 flex flex-col gap-5"
            bg="#112240"
          >
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="bs:!hidden relative !z-50"
        size={size}
        color="#64FFDA"
        opened={opened}
        onClick={toggle}
      />
    </>
  );
};

export default SideBar;
